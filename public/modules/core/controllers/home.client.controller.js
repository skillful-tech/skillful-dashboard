'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
])
.controller('lineCrl',
	function($scope){
		$scope.dataset = [
{
    "day": "2013-01-08T00:00:00",
    "Milk": 300,
    "income": 200,
    "Weather": 30,
    "Grass": 130,
    "dayString": "Montag"
  },
  {
    "day": "2013-01-03T00:00:00",
    "Milk": 200,
    "income": 130,
    "Weather": 20,
    "Grass": 120,
    "dayString": "Dienstag"
  },
  {
    "day": "2013-01-04T00:00:00",
    "Milk": 160,
    "income": 90,
    "Weather": 50,
    "Grass": 150,
    "dayString": "Mittwoch"
  },
  {
    "day": "2013-01-05T00:00:00",
    "Milk": 400,
    "income": 240,
    "Weather": 40,
    "Grass": 140,
    "dayString": "Donnerstag"
  },
  {
    "day": "2013-01-06T00:00:00",
    "Milk": 250,
    "income": 130,
    "Weather": 60,
    "Grass": 160,
    "dayString": "Freitag"
  },
  {
    "day": "2013-01-07T00:00:00",
    "Milk": 250,
    "income": 220,
    "Weather": 50,
    "Grass": 150,
    "dayString": "Samstag"
  }
  
];

$scope.schema = {
  day: {
    type: 'timeseries',
    format: '%Y-%m-%d_%H:%M:%S',
    name: 'Date'
  }
};

$scope.options = {

  "rows": [
    {
      "key": "Milk",
      "type": "spline",
      "axis": "y",
      "color": "#1f77b4"
    },
    {
      "key": "Weather",
      "type": "scatter",
      "axis": "y",
      "color": "#ff7f0e"
    },
    {
      "key": "Grass",
      "type": "bar",
      "axis": "y",
      "color": "#2ca02c"
    }
  ],
  "zoom": {
    "enabled": true,
    "range": [
      -1.000000082740371e-10,
      6
    ]
  },
  "selection": {
    "selected": []
  },
  "type": "line"
    
}

	})
.controller('pieCrl',
	function($scope){
		$scope.dataset = [
{
    "day": "2013-01-08T00:00:00",
    "Milk": 300,
    "income": 200,
    "Weather": 30,
    "Grass": 130,
    "dayString": "Montag"
  },
  {
    "day": "2013-01-03T00:00:00",
    "Milk": 200,
    "income": 130,
    "Weather": 20,
    "Grass": 120,
    "dayString": "Dienstag"
  },
  {
    "day": "2013-01-04T00:00:00",
    "Milk": 160,
    "income": 90,
    "Weather": 50,
    "Grass": 150,
    "dayString": "Mittwoch"
  },
  {
    "day": "2013-01-05T00:00:00",
    "Milk": 400,
    "income": 240,
    "Weather": 40,
    "Grass": 140,
    "dayString": "Donnerstag"
  },
  {
    "day": "2013-01-06T00:00:00",
    "Milk": 250,
    "income": 130,
    "Weather": 60,
    "Grass": 160,
    "dayString": "Freitag"
  },
  {
    "day": "2013-01-07T00:00:00",
    "Milk": 250,
    "income": 220,
    "Weather": 50,
    "Grass": 150,
    "dayString": "Samstag"
  }
  
];

$scope.schema = {
  day: {
    type: 'timeseries',
    format: '%Y-%m-%d_%H:%M:%S',
    name: 'Date'
  }
};

$scope.options = {

  "rows": [
    {
      "key": "Milk",
      "type": "pie",
      "axis": "y",
      "color": "#1f77b4"
    },
    {
      "key": "Weather",
      "type": "pie",
      "axis": "y",
      "color": "#ff7f0e"
    },
    {
      "key": "Grass",
      "type": "pie",
      "axis": "y",
      "color": "#2ca02c"
    }
  ],
  "zoom": {
    "enabled": true,
    "range": [
      -1.000000082740371e-10,
      6
    ]
  },
     "size": {
        "height": 200,
        "width": 200
    },
  "selection": {
    "selected": []
  },
  "type": "line"
}

	})
.controller('donutCrl',
	function($scope){
		$scope.dataset = [
{
    "day": "2013-01-08T00:00:00",
    "Milk": 300,
    "income": 200,
    "Weather": 30,
    "Grass": 130,
    "dayString": "Montag"
  },
  {
    "day": "2013-01-03T00:00:00",
    "Milk": 200,
    "income": 130,
    "Weather": 20,
    "Grass": 120,
    "dayString": "Dienstag"
  },
  {
    "day": "2013-01-04T00:00:00",
    "Milk": 160,
    "income": 90,
    "Weather": 50,
    "Grass": 150,
    "dayString": "Mittwoch"
  },
  {
    "day": "2013-01-05T00:00:00",
    "Milk": 400,
    "income": 240,
    "Weather": 40,
    "Grass": 140,
    "dayString": "Donnerstag"
  },
  {
    "day": "2013-01-06T00:00:00",
    "Milk": 250,
    "income": 130,
    "Weather": 60,
    "Grass": 160,
    "dayString": "Freitag"
  },
  {
    "day": "2013-01-07T00:00:00",
    "Milk": 250,
    "income": 220,
    "Weather": 50,
    "Grass": 150,
    "dayString": "Samstag"
  }
  
];

$scope.schema = {
  day: {
    type: 'timeseries',
    format: '%Y-%m-%d_%H:%M:%S',
    name: 'Date'
  }
};

$scope.options = {

  "rows": [
    {
      "key": "Milk",
      "type": "donut",
      "axis": "y",
      "color": "#1f77b4"
    },
    {
      "key": "Weather",
      "type": "donut",
      "axis": "y",
      "color": "#ff7f0e"
    },
    {
      "key": "Grass",
      "type": "donut",
      "axis": "y",
      "color": "#2ca02c"
    }
  ],
  "zoom": {
    "enabled": true,
    "range": [
      -1.000000082740371e-10,
      6
    ]
  },
  "selection": {
    "selected": []
  },
     "size": {
        "height": 200,
        "width": 200
    },
  "type": "line"
}

	})
.controller('areaCrl',
	function($scope){
		$scope.dataset = [
{
    "day": "2013-01-08T00:00:00",
    "Milk": 300,
    "income": 200,
    "Weather": 30,
    "Grass": 130,
    "dayString": "Montag"
  },
  {
    "day": "2013-01-03T00:00:00",
    "Milk": 200,
    "income": 130,
    "Weather": 20,
    "Grass": 120,
    "dayString": "Dienstag"
  },
  {
    "day": "2013-01-04T00:00:00",
    "Milk": 160,
    "income": 90,
    "Weather": 50,
    "Grass": 150,
    "dayString": "Mittwoch"
  },
  {
    "day": "2013-01-05T00:00:00",
    "Milk": 400,
    "income": 240,
    "Weather": 40,
    "Grass": 140,
    "dayString": "Donnerstag"
  },
  {
    "day": "2013-01-06T00:00:00",
    "Milk": 250,
    "income": 130,
    "Weather": 60,
    "Grass": 160,
    "dayString": "Freitag"
  },
  {
    "day": "2013-01-07T00:00:00",
    "Milk": 250,
    "income": 220,
    "Weather": 50,
    "Grass": 150,
    "dayString": "Samstag"
  }
  
];

$scope.schema = {
  day: {
    type: 'timeseries',
    format: '%Y-%m-%d_%H:%M:%S',
    name: 'Date'
  }
};

$scope.options = {
     

  "rows": [
    {
      "key": "Milk",
      "type": "area",
      "axis": "y",
      "color": "#1f77b4"
    },
    {
      "key": "Weather",
      "type": "area",
      "axis": "y",
      "color": "#ff7f0e"
    },
    {
      "key": "Grass",
      "type": "area",
      "axis": "y",
      "color": "#2ca02c"
    }
  ],
  "zoom": {
    "enabled": true,
    "range": [
      -1.000000082740371e-10,
      6
    ]
  },
     "size": {
        "height": 200,
        "width": 200
    },
  "selection": {
    "selected": []
  },
  "type": "line"
}

	})
.controller('gaugeCrl',
	function($scope){
		$scope.dataset = [
{
    "day": "2013-01-08T00:00:00",
    "Milk": 300,
    "income": 200,
    "Weather": 30,
    "Grass": 130,
    "dayString": "Montag"
  },
  {
    "day": "2013-01-03T00:00:00",
    "Milk": 200,
    "income": 130,
    "Weather": 20,
    "Grass": 120,
    "dayString": "Dienstag"
  },
  {
    "day": "2013-01-04T00:00:00",
    "Milk": 160,
    "income": 90,
    "Weather": 50,
    "Grass": 150,
    "dayString": "Mittwoch"
  },
  {
    "day": "2013-01-05T00:00:00",
    "Milk": 400,
    "income": 240,
    "Weather": 40,
    "Grass": 140,
    "dayString": "Donnerstag"
  },
  {
    "day": "2013-01-06T00:00:00",
    "Milk": 250,
    "income": 130,
    "Weather": 60,
    "Grass": 160,
    "dayString": "Freitag"
  },
  {
    "day": "2013-01-07T00:00:00",
    "Milk": 250,
    "income": 220,
    "Weather": 50,
    "Grass": 150,
    "dayString": "Samstag"
  }
  
];

$scope.schema = {
  day: {
    type: 'timeseries',
    format: '%Y-%m-%d_%H:%M:%S',
    name: 'Date'
  }
};

$scope.options = {

  "rows": [
    {
      "key": "Milk",
      "type": "gauge",
      "axis": "y",
      "color": "#1f77b4"
    },
    {
      "key": "Weather",
      "type": "gauge",
      "axis": "y",
      "color": "#ff7f0e"
    },
    {
      "key": "Grass",
      "type": "gauge",
      "axis": "y",
      "color": "#2ca02c"
    }
  ],
  "zoom": {
    "enabled": true,
    "range": [
      -1.000000082740371e-10,
      6
    ]
  },
    "size": {
        "height": 200,
        "width": 200
    },
  "selection": {
    "selected": []
  },
  "type": "line"
}

	})
   .controller('mainCtrl', function($scope) {
        $scope.map = {center: {latitude: 53.4902, longitude: -7.96 }, zoom: 7 };
    $scope.dragging=false;
        $scope.options = {scrollwheel: false};
      $scope.circles = [
            {
                id: 1,
                center: {
                    latitude:53.4902,
                    longitude: -7.96
                },
                radius: 9000,
                stroke: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1
                },
                fill: {
                    color: '#ff0000',
                    opacity: 0.5
                },
                geodesic: true, // optional: defaults to false
                draggable: false, // optional: defaults to false
                clickable: true, // optional: defaults to true
                editable: false, // optional: defaults to false
                visible: true, // optional: defaults to true
                control: {}
            },
                  {
                id: 2,
                center: {
                    latitude:53,
                    longitude: -7
                },
                radius: 9000,
                stroke: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1
                },
                fill: {
                    color: '#ff0000',
                    opacity: 0.5
                },
                geodesic: false, // optional: defaults to false
                draggable: false, // optional: defaults to false
                clickable: true, // optional: defaults to true
                editable: false, // optional: defaults to false
                visible: true, // optional: defaults to true
                control: {}
            }
        ];
         
   
    
    });