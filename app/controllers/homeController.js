myApp.controller('homeController',function($scope,$rootScope){
     
     $rootScope.softwares = [

                       {
                       	name : 'Adobe Acrobat',
                       description : 'Adobe Acrobat is a family of application software and Web services developed by Adobe Systems',
                       id : '0',
                       img :'images/adobe.jpg'
                       },

                       {
                       	name : 'Ableton Live',
                       description : 'Ableton Live is a software music sequencer and digital audio workstation for OS X and Windows.',
                        id : '1',
                        img :'images/abeton.jpg'
                       },

                       {
                       	name : 'Sipdroid',
                       description : 'Sipdroid is a voice over IP (internet protocol, VoIP) application for the Android operating system',
                       id : '2',
                       img :'images/sipdroid.jpg'
                       },

                       {
                       	name : 'Apache Wave',
                       description : 'Apache Wave is a software framework for real-time collaborative editing online.',
                        id : '3',
                        img :'images/wave.jpg'
                       },

                       {
                       	name : 'Etherpad',
                       description : 'Etherpad is a web-based collaborative real-time editor.',
                        id : '4',
                        img :'images/ether.jpg'
                       },

                       {
                       	name : 'HoverRace',
                       description : 'HoverRace is a racing video game created by GrokkSoft in 1996 as shareware.',
                        id : '5',
                        img :'images/hover.jpg'
                       },

                       {
                       	name : 'NetBeans',
                       description : 'NetBeans is a software development platform written in Java.',
                        id : '6',
                        img :'images/net.jpg'
                       },

                       {
                       	name : 'Rebol',
                       description : 'Rebol is a cross-platform data exchange and a multi-paradigm dynamic programming language',
                        id : '7',
                        img :'images/rebol.jpg'
                       },
                       {
                       	name : 'Symbian',
                       description : 'Symbian was a mobile operating system (OS) and computing platform designed for smartphones.',
                        id : '8',
                        img :'images/symbiop.png'
                       },
                       {
                       	name : 'TurboCASH',
                       description : 'TurboCASH is a free software accounting software package,',
                        id : '9',
                        img :'images/turbo.png'
                       }

                        ]
                        $scope.click=function(id1){
                        	$rootScope.id=id1;
                        }
                        // var f=$stateParams.key;
           
});