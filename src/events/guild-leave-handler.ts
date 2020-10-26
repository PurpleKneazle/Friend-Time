import { Guild } from 'discord.js';

import { LogsSchema } from '../models/logs';
import { Logger } from '../services';
import { EventHandler } from './event-handler';

let Logs: LogsSchema = require('../../lang/logs.en.json');

export class GuildLeaveHandler implements EventHandler {
    public async process(guild: Guild): Promise<void> {
        Logger.info(
            Logs.guildLeft.replace('{GUILD_NAME}', guild.name).replace('{GUILD_ID}', guild.id)
        );
    }
}
