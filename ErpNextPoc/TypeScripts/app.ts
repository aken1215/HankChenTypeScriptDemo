module Sample {
    angular.module('Hank.Chen', [
        'ui.router',
        'Hank.Chen.Services',
        'Hank.Chen.Controllers',
        'Hank.Chen.Configs'
    ]);

    angular.module('Hank.Chen.Configs', []);
    angular.module('Hank.Chen.Components', []);
    angular.module('Hank.Chen.Controllers', ['Hank.Chen.Services']);
    angular.module('Hank.Chen.Services', []);
}