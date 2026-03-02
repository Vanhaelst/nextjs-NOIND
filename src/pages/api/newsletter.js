export default async function sendNewsletterContact(req, res) {
    const { data } = req?.body ?? {};

    const result = await fetch("https://api.sendinblue.com/v3/contacts/doubleOptinConfirmation", {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": process.env.SENDINBLUE_API_KEY || "xkeysib-",
        },
        body: JSON.stringify({
            email: data.email,
            attributes: {
                LASTNAME: data.name,
                OPT_IN_KLETZ: true,
                COUNTRIES: ["Belgium"],
            },
            emailBlacklisted: false,
            smsBlacklisted: false,
            includeListIds: [7],
            templateId: 3,
            redirectionUrl: "https://www.kletz.be/",
            updateEnabled: true,
        }),
    })
        .then((res) => res.json())
        .then((json) => {
            console.log('json', json);
            return ({ status: 200, ...json })
        })
        .catch((err) => console.error("catch", err));

    return res.status(200).send(result);
}
