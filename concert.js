
    function handleTickInit(tick) {

        // uncomment to set labels to different language
        
        var locale = {
            YEAR_PLURAL: 'Années',
            YEAR_SINGULAR: 'Année',
            MONTH_PLURAL: 'Mois',
            MONTH_SINGULAR: 'Mois',
            WEEK_PLURAL: 'Semaines',
            WEEK_SINGULAR: 'Semaine',
            DAY_PLURAL: 'Jours',
            DAY_SINGULAR: 'Jour',
            HOUR_PLURAL: 'Heures',
            HOUR_SINGULAR: 'Heure',
            MINUTE_PLURAL: 'Minutes',
            MINUTE_SINGULAR: 'Minute',
            SECOND_PLURAL: 'Secondes',
            SECOND_SINGULAR: 'Seconde',
            MILLISECOND_PLURAL: 'Millisecondes',
            MILLISECOND_SINGULAR: 'Milliseconde'
        };
        for (var key in locale) {
            if (!locale.hasOwnProperty(key)) { continue; }
            tick.setConstant(key, locale[key]);
        }

        // format of due date is ISO8601
        // https://en.wikipedia.org/wiki/ISO_8601

        // '2018-01-31T12:00:00'        to count down to the 31st of January 2018 at 12 o'clock
        // '2019'                       to count down to 2019
        // '2018-01-15T10:00:00+01:00'  to count down to the 15th of January 2018 at 10 o'clock in timezone GMT+1

        // create the countdown counter
        var counter = Tick.count.down('2021-05-30T00:00:00+01:00');

        counter.onupdate = function(value) {
          tick.value = value;
        };

        counter.onended = function() {
            // redirect, uncomment the next line
            // window.location = 'my-location.html'

            // hide counter, uncomment the next line
            // tick.root.style.display = 'none';

            // show message, uncomment the next line
            // document.querySelector('.tick-onended-message').style.display = '';
        };
    }
