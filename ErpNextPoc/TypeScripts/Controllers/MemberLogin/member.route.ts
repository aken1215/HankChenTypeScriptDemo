module Hank.Chen.Controllers {

    function GetMemberData($q: ng.IQService,
        $stateParams: ng.ui.IStateParamsService,
        MemberService: Services.MemberService) 
        {
            var deferred = $q.defer();

            MemberService.GetMember()
                .success((data) => {
                deferred.resolve(data);
            });

        return deferred.promise;
    }

    GetMemberData.$inject = ['$q', '$stateParams','MemberService'];

    function MemberControllerRoute($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('member',
            {

                url: '/member',  
                templateUrl: 'TypeScripts/Controllers/MemberLogin/member.html',
                controller: 'MemberController',
                controllerAs: 'MemberCtrl',
                resolve: {
                    Member: function () {
                        let obj: ViewModel.MemberViewModel = {
                            Id: "13713866-9111-4E96-9CB5-CCF65CE87E31",
                            Name: "test"
                        };
                        return obj;
                    }
                }
            })
    }        


    MemberControllerRoute.$inject = ['$stateProvider'];

    angular.module('Hank.Chen.Controllers')
        .config(MemberControllerRoute);

}