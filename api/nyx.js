export default function handler(req, res) {
    // Ubah default region dari "BR" menjadi "ID"
    const { count = 1, name = "FAHMI", password = "FAHMI", region = "ID" } = req.query;

    let accounts = [];
    const baseId = 19000000000;

    for (let i = 0; i < parseInt(count); i++) {
        const sequentialId = baseId + i;

        accounts.push({
            uid: String(sequentialId),
            password: password,
            name: name,
            account_id: String(sequentialId),
            jwt_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            region: region.toUpperCase()
        });
    }

    return res.status(200).json({
        success: true,
        accounts: accounts
    });
}
