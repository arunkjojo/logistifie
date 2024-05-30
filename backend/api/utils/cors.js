const allowedOrigins = [
  "http://localhost:3000",
  "https://logistifie-ivory.vercel.app",
  "http://logistifie-ivory.vercel.app",
];

exports.corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
