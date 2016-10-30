#!/usr/bin/python

import sys
import json
import random
import string
import geocoder

def json_load_byteified(file_handle):
    return _byteify(
        json.load(file_handle, object_hook=_byteify),
        ignore_dicts=True
    )

def json_loads_byteified(json_text):
    return _byteify(
        json.loads(json_text, object_hook=_byteify),
        ignore_dicts=True
    )

def _byteify(data, ignore_dicts = False):
    # if this is a unicode string, return its string representation
    if isinstance(data, unicode):
        return data.encode('utf-8')
    # if this is a list of values, return list of byteified values
    if isinstance(data, list):
        return [ _byteify(item, ignore_dicts=True) for item in data ]
    # if this is a dictionary, return dictionary of byteified keys and values
    # but only if we haven't already byteified it
    if isinstance(data, dict) and not ignore_dicts:
        return {
            _byteify(key, ignore_dicts=True): _byteify(value, ignore_dicts=True)
            for key, value in data.iteritems()
        }
    # if it's anything else, return it in its original form
    return data


def addEmail():

    data = json_load_byteified(open('aziende_bio_lombardia.json'))

    for i in range(0,len(data)):
        print data[i]['indirizzo_sede_legale'] + ", " + data[i]['comune_sede_legale']
        g = geocoder.google(data[i]['indirizzo_sede_legale'] + ", " + data[i]['comune_sede_legale'])
        print g.latlng
        obj = data[i]
        #setattr(data[i], 'lat', g.latlng[0])
        #setattr(data[i], 'lng', g.latlng[1])
        if len(g.latlng) > 1:
            obj['lat'] = g.latlng[0]
            obj['lng'] = g.latlng[1]
            data[i] = obj

    # scrivo le modifiche su file
    with open('aziende_bio_lombardia.json', 'w') as outfile:
            json.dump(data, outfile, indent=4)

    #with open('aziende_bio_lombardia.json', 'r') as fp:
     #   data = json.load(fp)
      #  
       # for i in range(0,10):
        #    print data[i]
         #   g = geocoder.google(data[i].indirizzo_sede_legale + " " + data[i].comune_sede_legale)
          #  print g.latlng

addEmail()