module Hank.Chen.Services {
    export class MemberService {
        static $inject = ['$http', 'Config']

        constructor(
            private $http: ng.IHttpService,
            private config: Configs.IConfig

        ) {
        }

        GetMember(): ng.IHttpPromise<ViewModel.MemberViewModel> {
            var url = `${this.config.SampleApiRoot}/Member/`;
            return this.$http.get<ViewModel.MemberViewModel>(url);
        }
    }

    angular.module('Hank.Chen.Services')
        .service('MemberService', MemberService);
}