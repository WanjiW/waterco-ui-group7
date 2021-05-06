<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Routes</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmitRoutes();">
            <div class="form-group row">
                <label for="RouteNumber" class="col-sm-4 col-form-label col-form-label-sm">RouteNumber:</label>
                <div class="col-sm-8">
                    <input type="text" name="RouteNumber" class="form-control form-control-sm" id="RouteNumber" placeholder="RouteNumber">
                </div>
            </div>
            <div class="form-group row">
                <label for="RouteStatus" class="col-sm-4 col-form-label col-form-label-sm">RouteStatus:</label>
                <div class="col-sm-8">
                    <select class="custom-select form-control-sm" name="RouteStatus" id="RouteStatus">
                        <option selected>Status</option>
                        <option value="ON">ON</option>
                        <option value="OFF">OFF</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="ZoneID" class="col-sm-4 col-form-label col-form-label-sm">ZoneID:</label>
                <div class="col-sm-8">
                    <input type="text" name="ZoneID" class="form-control form-control-sm" id="ZoneID" placeholder="ZoneID">
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
            <table class="table table-striped table-sm" id="routeslist">
                <thead>
                    <tr>
                        <th>Route Number</th>
                        <th>Route Status</th>
                        <th>Zone ID</th>
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