module Hank.Chen.Configs {
    export class ConfigProvider implements ng.IServiceProvider {
        config:IConfig = {
            SampleApiRoot: 'http://localhost/sampleapi/api',
        }

        $get() {
            return this.config;
        }
    }
}