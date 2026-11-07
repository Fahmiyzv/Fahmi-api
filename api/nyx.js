export default function handler(req, res) {
    const { count = 1, name = "FAHMI", password = "FAHMI", region = "BR" } = req.query;

    let accounts = [];
    for (let i = 0; i < parseInt(count); i++) {
        const randomId = Math.floor(1000000000 + Math.random() * 9000000000);

        accounts.push({
            uid: String(randomId),
            password: password,
            name: name,
            account_id: String(randomId + 123),
            jwt_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjoxNz...",
            region: region.toUpperCase()
        });
    }

    return res.status(200).json({
        success: true,
        accounts: accounts
    });
}
