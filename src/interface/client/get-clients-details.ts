export interface GetClientsDetailsRequest {
    clientid?: number;
    email?: string;
    stats?: boolean;
}

export interface GetClientsDetailsResponse {
    result: string;
    client: Client;
    userid: number;
    id: number;
    uuid: string;
    firstname: string;
    lastname: string;
    fullname: string;
    companyname: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    fullstate: string;
    state: string;
    postcode: string;
    countrycode: string;
    country: string;
    phonenumber: string;
    tax_id: string;
    password: string;
    email_preferences: {
        general: string;
        invoice: string;
        support: string;
        product: string;
        domain: string;
        affiliate: string;
    };
    statecode: string;
    countryname: string;
    phonecc: number;
    phonenumberformatted: string;
    telephoneNumber: string;
    billingcid: number;
    notes: string;
    twofaenabled: boolean;
    currency: number;
    defaultgateway: string;
    cctype: null;
    cclastfour: null;
    gatewayid: null;
    securityqid: number;
    securityqans: string;
    groupid: number;
    status: string;
    credit: string;
    taxexempt: boolean;
    latefeeoveride: boolean;
    overideduenotices: boolean;
    separateinvoices: boolean;
    disableautocc: boolean;
    emailoptout: boolean;
    marketing_emails_opt_in: boolean;
    overrideautoclose: boolean;
    allowSingleSignOn: number;
    email_verified: boolean;
    language: string;
    isOptedInToMarketingEmails: boolean;
    lastlogin: string;
    customfields: {
        id: number;
        value: string;
    }[];
    currency_code: string;
}

export interface Client {
    userid: number;
    id: number;
    uuid: string;
    firstname: string;
    lastname: string;
    fullname: string;
    companyname: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    fullstate: string;
    state: string;
    postcode: string;
    countrycode: string;
    country: string;
    phonenumber: string;
    tax_id: string;
    password: string;
    email_preferences: {
        general: string;
        invoice: string;
        support: string;
        product: string;
        domain: string;
        affiliate: string;
    };
    statecode: string;
    countryname: string;
    phonecc: number;
    phonenumberformatted: string;
    telephoneNumber: string;
    billingcid: number;
    notes: string;
    twofaenabled: boolean;
    currency: number;
    defaultgateway: string;
    securityqid: number;
    securityqans: string;
    groupid: number;
    status: string;
    credit: string;
    taxexempt: boolean;
    latefeeoveride: boolean;
    overideduenotices: boolean;
    separateinvoices: boolean;
    disableautocc: boolean;
    emailoptout: boolean;
    marketing_emails_opt_in: boolean;
    overrideautoclose: boolean;
    allowSingleSignOn: number;
    email_verified: boolean;
    language: string;
    isOptedInToMarketingEmails: boolean;
    lastlogin: string;
    customfields: { id: number; value: string }[];
    currency_code: string;
}
