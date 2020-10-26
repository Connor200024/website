/*
Discord Extreme List - Discord's unbiased list.

Copyright (C) 2020 Cairo Mitchell-Acason, John Burke, Advaith Jagathesan

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { UserFlags, APIChannel, APIRole, APIUser } from 'discord-api-types/v8'

declare global {
    interface authUser {
        id: string;
        username: string;
        avatar: string;
        discriminator: string;
        public_flags: UserFlags;
        flags: UserFlags;
        email?: string;
        verified: boolean;
        locale: string;
        mfa_enabled: boolean;
        provider: string;
        accessToken: string;
        fetchedAt: string;
        impersonator?: string;
        db: delUser;
    }

    interface auditType {
        name: string;
        icon: string;
    }

    interface delUser {
        _id: string;
        token: string;
        name: string;
        discrim: string;
        fullUsername: string;
        locale: string;
        flags: UserFlags;
        avatar: {
            hash: string;
            url: string;
        };
        preferences: {
            customGlobalCss: string;
            defaultColour: string;
            defaultForegroundColour: string;
            enableGames: boolean;
            experiments: boolean;
            theme: number;
        };
        profile: {
            bio: string;
            css: string;
            links: {
                website: string;
                github: string;
                gitlab: string;
                twitter: string;
                instagram: string;
                snapchat: string;
            };
        };
        game: {
            snakes: {
                maxScore: number;
            };
        };
        rank: {
            admin: boolean;
            assistant: boolean;
            mod: boolean;
            premium: boolean;
            tester: boolean;
            translator: boolean;
            covid: boolean;
        };
        staffTracking: {
            details: {
                away: {
                    status: boolean;
                    message: string;
                };
                standing: string;
                country: string;
                timezone: string;
                managementNotes: string;
                languages: string[];
            };
            lastLogin: number;
            lastAccessed: {
                time: number;
                page: string;
            };
            punishments: {
                strikes: staffStrike[];
                warnings: staffWarning[];
            };
            handledBots: {
                allTime: {
                    total: number;
                    approved: number;
                    unapprove: number;
                    declined: number;
                    remove: number;
                };
                prevWeek: {
                    total: number;
                    approved: number;
                    unapprove: number;
                    declined: number;
                    remove: number;
                };
                thisWeek: {
                    total: number;
                    approved: number;
                    unapprove: number;
                    declined: number;
                    remove: number;
                };
            };
            handledServers: {
                allTime: {
                    total: number;
                    approved: number;
                    declined: number;
                    remove: number;
                };
                prevWeek: {
                    total: number;
                    approved: number;
                    declined: number;
                    remove: number;
                };
                thisWeek: {
                    total: number;
                    approved: number;
                    declined: number;
                    remove: number;
                };
            };
            handledTemplates: {
                allTime: {
                    total: number;
                    approved: number;
                    declined: number;
                    remove: number;
                };
                prevWeek: {
                    total: number;
                    approved: number;
                    declined: number;
                    remove: number;
                };
                thisWeek: {
                    total: number;
                    approved: number;
                    declined: number;
                    remove: number;
                };
            };
        };
    }

    interface delBot {
        _id: string;
        _cacheID?: string;
        clientID: string;
        name: string;
        prefix: string;
        library: string;
        tags: string[];
        vanityUrl: string;
        serverCount: number;
        shardCount: number;
        inServer?: boolean;
        token: string;
        flags: UserFlags;
        shortDesc: string;
        longDesc: string;
        modNotes: string;
        reviewNotes: reviewNote[];
        editors: string[];
        owner: {
            id: string;
        };
        avatar: {
            hash: string;
            url: string;
        };
        votes: {
            positive: string[];
            negative: string[];
        };
        links: {
            invite: string;
            support: string;
            website: string;
            donation: string;
            repo: string;
            privacyPolicy: string;
        };
        social: {
            twitter: string;
        };
        theme: {
            useCustomColour: boolean;
            colour: string;
            banner: string;
        };
        widgetbot: {
            channel: string;
            options: string;
            server: string;
        };
        status: {
            approved: boolean;
            premium: boolean;
            siteBot: boolean;
            archived: boolean;
        };
    }

    interface delServer {
        _id: string;
        inviteCode: string;
        name: string;
        shortDesc: string;
        longDesc: string;
        tags: string[];
        previewChannel: string;
        owner: {
            id: string;
        };
        icon: {
            hash: string;
            url: string;
        };
        links: {
            invite: string;
            website: string;
            donation: string;
        };
        status: {
            reviewRequired: boolean;
        };
    }

    interface delTemplate {
        _id: string;
        name: string;
        region: string;
        locale: string;
        afkTimeout: number;
        verificationLevel: number;
        defaultMessageNotifications: number;
        explicitContent: number;
        roles: Pick<APIRole, "name" | "color">[];
        channels: Pick<APIChannel, "name" | "type" | "nsfw">[];
        usageCount: number;
        shortDesc: string;
        longDesc: string;
        tags: string[];
        fromGuild: string;
        owner: {
            id: string;
        };
        creator: Pick<APIUser, "id" | "username" | "discriminator">;
        icon: {
            hash: string;
            url: string;
        };
        links: {
            linkToServerPage: boolean;
            template: string;
        };
    }

    interface auditLog {
        _id: string;
        type: string;
        executor: string;
        target: string;
        date: number;
        reason: string;
        details: {
            new: any;
            old: any;
        };
    }

    interface staffStrike {
        executorName?: string;
        executor: string;
        reason: string;
        date: number;
    }

    interface staffWarning {
        executorName?: string;
        executor: string;
        reason: string;
        date: number;
    }

    interface library {
        _id?: string;
        name?: string;
        language: string;
        links: {
            docs: string;
            repo: string;
        };
    }

    interface reviewNote {
        note: string;
        author: string;
        date: number;
    }
}
