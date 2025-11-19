export default async function handler(req, res) {
    try {
        const city = req.query.city;
        const key = process.env.WEATHER_KEY;

        if (!key) {
            return res.status(500).json({ error: "Missing API key." });
        }

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric&lang=en`;

        const response = await fetch(url);

        if (!response.ok) {
            return res.status(response.status).json({
                error: "Weather API error",
                status: response.status
            });
        }

        const data = await response.json();

        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
}
