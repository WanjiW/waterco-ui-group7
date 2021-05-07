<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Premises</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmitPremise();">
            <div class="form-group row">
                <label for="PremiseName" class="col-sm-4 col-form-label col-form-label-sm">PremiseName:</label>
                <div class="col-sm-8">
                    <input type="text" name="PremiseName" class="form-control form-control-sm" id="PremiseName" placeholder="PaymentName">
                </div>
            </div>
            <div class="form-group row">
                <label for="CustomerID" class="col-sm-4 col-form-label col-form-label-sm">CustomerID:</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control form-control-sm" name="CustomerID" id="CustomerID" placeholder="CustomerID">
                </div>
            </div>
            <div class="form-group row">
                <label for="ZoneID" class="col-sm-4 col-form-label col-form-label-sm">ZoneID:</label>
                <div class="col-sm-8">
                    <input type="text" name="ZoneID" class="form-control form-control-sm" id="ZoneID" placeholder="ZoneID">
                </div>
            </div>
            <div class="form-group row">
                <label for="Classification" class="col-sm-4 col-form-label col-form-label-sm">Classification:</label>
                <div class="col-sm-8">
                    <input type="text" name="Classification" class="form-control form-control-sm" id="Classification" placeholder="Classification">
                </div>
            </div>
            <div class="form-group row">
                <label for="RouteNumber" class="col-sm-4 col-form-label col-form-label-sm">RouteNumber:</label>
                <div class="col-sm-8">
                    <input type="text" name="RouteNumber" class="form-control form-control-sm" id="RouteNumber" placeholder="RouteNumber">
                </div>
            </div>
            <div class="form-group row">
                <label for="premiseStatus" class="col-sm-4 col-form-label col-form-label-sm">premiseStatus:</label>
                <div class="col-sm-8">
                    <input type="text" name="PremiseStatus" class="form-control form-control-sm" id="PremiseStatus" placeholder="PremisesStatus">
                </div>
            </div>
            <div class="form-group row">
                <label for="MeteNumber" class="col-sm-4 col-form-label col-form-label-sm">MeterNumber:</label>
                <div class="col-sm-8">
                    <input type="text" name="MeterNumber" class="form-control form-control-sm" id="MeterNumber" placeholder="MeterNumber">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-8">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
    <div class="col-md-8">
        <div class="table-responsive">
            <table class="table table-striped table-sm" id="premiseslist">
                <thead>
                    <tr>
                        <th>PremiseID</th>
                        <th>PremiseName</th>
                        <th>CustomerID</th>
                        <th>ZoneID</th>
                        <th>Classification</th>
                        <th>RouteNumber</th>
                        <th>PremisesStatus</th>
                        <th>MeterNumber</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Records Go In Here -->
                </tbody>
            </table>
        </div>
    </div>
</div>