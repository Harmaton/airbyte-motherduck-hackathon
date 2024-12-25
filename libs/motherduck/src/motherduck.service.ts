import { Injectable } from '@nestjs/common';
import { DuckDBInstance } from '@duckdb/node-api';

@Injectable()
export class MotherduckService {

    public create_connection = async() => {
        const motherducktoken = `:md:motherduck_token=${process.env.MOTHERDUCK_TOKEN}`
        const instance = await DuckDBInstance.create(motherducktoken, {
            threads: '4'
        });
        const connection = await instance.connect();
        return connection
    }

}
