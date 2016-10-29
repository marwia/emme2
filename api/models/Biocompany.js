/**
 * Biocompany.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

      attributes: {
        denominazione_aziendale : { type: 'String', required: true },
        codice_attivita : { type: 'String', required: true },
        indirizzo_sede_legale : { type: 'String', required: true },
        comune_sede_legale : { type: 'String', required: true },
        provincia : { type: 'String', required: true },
        descrizione_tipologia : { type: 'String', required: true },
        descrizione_tipo_attivita : { type: 'String', required: true },
        tipologia_azienda : { type: 'String', required: true },
    
        telefono : { type: 'String', required: true },
        cuaa : { type: 'String', required: true },
        attivita : { type: 'String', required: true },
    }
};

