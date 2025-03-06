import app from "./app";
import { config } from "./config";
import { log } from "./utils/logger";

const port = config.port;

app.listen(port, () => {
    log(`Server running on port ${port} in ${config.env} mode.`);
});
