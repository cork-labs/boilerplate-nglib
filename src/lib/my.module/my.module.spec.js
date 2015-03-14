describe('my.module', function () {
    'use strict';

    beforeEach(module('my.module'));
    beforeEach(module('my.module.templates'));

    describe('myServiceProvider', function () {

        var myServiceProvider;
        beforeEach(module(function (_myServiceProvider_) {
            myServiceProvider = _myServiceProvider_;
        }));

        it('should store the "divisor" configuration property.', inject(function (myService) {

            var divisor = 5;

            myServiceProvider.configure({
                divisor: divisor
            });

            expect(myService.divisor).toBe(divisor);
        }));

    });

    describe('myService', function () {

        var myServiceProvider;
        beforeEach(function () {
            // capture myServiceProvider
            module(function (_myServiceProvider_) {
                myServiceProvider = _myServiceProvider_;
            });
        });

        describe('default state', function () {

            it('should initialise with known defaults.', inject(function (myService)  {

                expect(myService.divisor).toEqual(2);
                expect(myService.rounding).toEqual(false);
            }));

        });

        describe('setName()', function () {

            it('should set/get the rounding.', inject(function (myService)  {

                var rounding = true;

                myService.rounding = rounding;

                expect(myService.rounding).toEqual(rounding);
            }));
        });

        describe('divide', function () {

            it('should return the raw quocient.', inject(function (myService)  {

                var divisor = 2;
                var dividend = 11;

                myServiceProvider.configure({
                    divisor: divisor
                });

                expect(myService.divide(dividend)).toEqual(dividend / divisor);
            }));

            it('should return the rounded quocient.', inject(function (myService)  {

                var divisor = 2;
                var dividend = 11;

                myServiceProvider.configure({
                    divisor: divisor
                });
                myService.rounding = true;

                expect(myService.divide(dividend)).toEqual(Math.round(dividend / divisor));
            }));
        });
    });
});
