module Hank.Chen.Controllers {
    export class MemberController {
        static $inject = ['Member'];
        constructor(
            public member: ViewModel.MemberViewModel
        ) {
        }
    }

    angular.module('Hank.Chen.Controllers')
        .controller('MemberController', MemberController);
}