<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">customers</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmitCustomers();">
            <div class="form-group row">
                <label for="CustomerName" class="col-sm-4 col-form-label col-form-label-sm">CustomerName:</label>
                <div class="col-sm-8">
                    <input type="text" name="CustomerName" class="form-control form-control-sm" id="CustomerName" placeholder="Member Name">
                    </div>

                </div>
            <div class="form-group row">
                <label for="PhoneNo" class="col-sm-4 col-form-label col-form-label-sm">PhoneNo</label>
                <div class="col-sm-8">
                    <input type="text" name="PhoneNo" class="form-control form-control-sm" id="PhoneNo" placeholder="Telephone Number">
                </div>
            </div>
 
            <div class="form-group row">
                <label for="EmailAddress" class="col-sm-4 col-form-label col-form-label-sm">EmailAddress:</label>
                <div class="col-sm-8">
                    <input type="email" name="email_address" class="form-control form-control-sm" id="EmailAddress" placeholder="Email Address">
                </div>

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
            <table class="table table-striped table-sm" id="memberslist">
                <thead>
                    <tr>
                        <th>CustomerID</th>
                        <th>CustomerName</th>
                        <th>PhoneNo</th>
                        <th>EmailAddress</th>
                        
 
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