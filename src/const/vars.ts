import dotenv from 'dotenv';
import { parseString } from 'src/utils/parsers/parseString';

dotenv.config();

const vars = {
    telegramApiKey: parseString(process.env.TG_API_KEY, 'TG_API_KEY'),
};

export default vars;