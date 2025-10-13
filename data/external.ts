import { Hospital, Bank } from '../types';

export const hospitals: Hospital[] = [
    {
        name: 'King Faisal Hospital',
        type: 'Private',
        location: 'Kacyiru, Kigali',
        phone: '+250 788 307 561',
        website: 'https://kfh.rw/',
    },
    {
        name: 'University Teaching Hospital of Kigali (CHUK)',
        type: 'Public',
        location: 'Nyarugenge, Kigali',
        phone: '+250 252 575 555',
        website: 'http://www.chuk.rw/',
    },
    {
        name: 'Rwanda Military Hospital',
        type: 'Public',
        location: 'Kanombe, Kigali',
        phone: '+250 788 305 608',
        website: 'https://rwandamilitaryhospital.rw/',
    },
    {
        name: 'Legacy Clinics & Diagnostics',
        type: 'Private',
        location: 'Nyarugunga, Kigali',
        phone: '+250 781 833 333',
        website: 'https://www.legacyclinic.rw/',
    },
    {
        name: 'La Croix du Sud Hospital (HCS)',
        type: 'Private',
        location: 'Remera, Kigali',
        phone: '+250 788 301 232',
        website: 'https://www.hopital-lacroixdusud.com/',
    },
    {
        name: 'BAHO International Hospital',
        type: 'Private',
        location: 'Nyarutarama, Kigali',
        phone: '+250 788 382 503',
        website: 'https://www.bahointernationalhospital.com/',
    }
];

export const banks: Bank[] = [
    {
        name: 'Bank of Kigali',
        website: 'https://www.bk.rw/',
        swiftCode: 'BKIGRWRW',
    },
    {
        name: 'I&M Bank Rwanda',
        website: 'https://www.imbank.com/rwanda/',
        swiftCode: 'IMRWRWRW',
    },
    {
        name: 'Equity Bank Rwanda',
        website: 'https://equitygroupholdings.com/rw/',
        swiftCode: 'EQBLRWRW',
    },
    {
        name: 'Access Bank Rwanda',
        website: 'https://rwanda.accessbankplc.com/',
        swiftCode: 'BKORRWRW',
    },
    {
        name: 'Ecobank Rwanda',
        website: 'https://ecobank.com/rw/personal-banking',
        swiftCode: 'ECOCRWRW',
    },
    {
        name: 'KCB Bank Rwanda',
        website: 'https://rw.kcbgroup.com/',
        swiftCode: 'KCBLRWRW',
    }
];