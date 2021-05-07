<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
        <meta name="generator" content="Jekyll v4.0.1">
        <title>Water Company MSWC Staff Dashboard</title>

        <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/starter-template/">

        <!-- Bootstrap core CSS -->
        <link href="assets/css/bootstrap.css" rel="stylesheet">

        <style>
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }
        </style>
        <!-- Custom styles for this template -->
        <link href="assets/css/starter-template.css" rel="stylesheet">
    </head>
    <body>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="#">Staff Dashboard</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=bills">Bills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=payments">Payments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=routes">Routes</a>
                    </li>
                </ul>
            </div>
        </nav>

        <main role="main" class="container-fluid">
            <?php
            if (isset($_GET['page'])) {
                $page = $_GET['page'];
                if ($page == 'bills') {
                    include 'bills.php';
                } elseif ($page == 'payments') {
                    include 'payments.php';
                } elseif ($page == 'routes') {
                    include 'routes.php';
                }
            } else {
                include 'home.php';
            }
            ?>

        </main><!-- /.container -->
        
        <script src="assets/js/jquery-3.3.1.js"></script>
        <script src="assets/js/bootstrap.bundle.js"></script>
        <!-- <script src="assets/js/waterco.js"></script> -->
        <!-- <script src="assets/js/waterco-bills.js"></script> -->
        <script src="assets/js/waterco-payments.js"></script>
        <!-- <script src="assets/js/waterco-routes.js"></script> -->

    </body>
</html>

© 2021 GitHub, Inc.
