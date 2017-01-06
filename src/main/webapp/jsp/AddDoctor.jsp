<html>
<head>
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/home.css">
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<jsp:include page="/jsp/Header.jsp" />
<jsp:include page="/jsp/Footer.jsp" />
</head>
<body ng-app="myApp">

	<div ng-controller="addDoctorController">
		<div>
			to add doctor <a href="#">Click here</a>
		</div>
		<div class="addForm" ng-show="isVisible"></div>
	</div>
</body>
</html>