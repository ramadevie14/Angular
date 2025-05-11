import { CounterService } from "./counter.service";
import { Counter2Service } from "./counter2.service";
import { TestService } from "./test.service";

export const counterFactory= {
    provide : CounterService, useFactory:(_testService:TestService)=> {
return _testService.status ? new CounterService(): new Counter2Service()}
    ,
    deps : [TestService]
};