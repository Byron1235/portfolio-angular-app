export default async function handler(req, res) {
    const city = req.query.city;

    // Tu API key segura en variable de entorno
    const key = process.env.WEATHER_KEY;

    if (!key) {
        return res.status(500).json({ error: "API key missing in server." });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "Weather API failed." });
    }
}
