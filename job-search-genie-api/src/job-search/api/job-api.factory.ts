import { Injectable } from "@nestjs/common";
import { ConfigService } from "../../config/config.service";

import { GitHubApiService } from "./github/github.api.service";

@Injectable()
export class JobApiFactory {
    constructor(private githubApi: GitHubApiService, 
        private config: ConfigService) {

    }
    public getApiInstance() {
        const selectedApiProvider: string = this.config.get('ACTIVATED_JOB_SEARCH_PROVIDER');
        switch (selectedApiProvider) {
            case 'GITHUB':
                return this.githubApi;
                break;
        }
    }
}