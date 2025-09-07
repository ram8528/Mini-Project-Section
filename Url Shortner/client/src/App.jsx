import React from "react";
import { useState } from "react";
import axios from "axios";

// ✅ Extracted API URL
const API_BASE_URL = "http://localhost:5000/shorten";

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const shortenUrl = async (url) => {
    try {
      const response = await axios.post(API_BASE_URL, { originalUrl: url });
      return response.data.shortUrl;
    } catch (err) {
      console.error("Error shortening URL:", err);
      throw new Error("Failed to shorten URL. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");
    setLoading(true);

    const trimmedUrl = originalUrl.trim();

    if (!trimmedUrl.startsWith("http")) {
      setError("Please enter a valid URL (starting with http or https).");
      setLoading(false);
      return;
    }

    try {
      const newShortUrl = await shortenUrl(trimmedUrl);
      setShortUrl(newShortUrl);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>🔗 URL Shortener</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter your long URL"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Shortening..." : "Shorten"}
        </button>
      </form>

      {error && <p style={styles.error}>{error}</p>}

      {shortUrl && (
        <div style={styles.result}>
          <p style={styles.para}>Shortened URL:</p>
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            {shortUrl}
          </a>
        </div>
      )}
    </main>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    marginTop: "20px",
  },
  input: {
    width: "320px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "yellow",
    color: "blue",
  },
  button: {
    marginLeft: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "green",
    borderRadius: "10px",
    color: "white",
  },
  result: {
    marginTop: "30px",
    fontSize: "18px",
  },
  error: {
    color: "red",
    marginTop: "20px",
  },
  heading: {
    color: "red",
    fontSize: "30px",
    fontWeight: "bolder",
  },
  para: {
    color: "black",
    fontSize: "25px",
  },
  link: {
    color: "blue",
    fontSize: "20px",
  },
};

export default App;
