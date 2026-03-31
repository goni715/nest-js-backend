/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown{
    private isConnected = false;

    //this method will be automatically called when this module or service will be load
    onModuleInit(){
        this.isConnected= true;
        console.log("Database is connected");
    }


    //this method will be automatically called when application will be closed
    onApplicationShutdown(signal: string){
        this.isConnected=false;
        console.log(`Database disconnected due to app shutdown ${signal}`);
    }

    getStatus(){
        return this.isConnected ? "Connected" : "Disconnected";
    }

}
