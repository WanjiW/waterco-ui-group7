<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Payments</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmit();">
            <!-- <div class="form-group row">
                <label for="PaymentID" class="col-sm-4 col-form-label col-form-label-sm">PaymentID:</label>
                <div class="col-sm-8">
                    <input type="text" name="PaymentID" class="form-control form-control-sm" id="PaymentID" placeholder="PaymentID">
                </div>
            </div> -->
            <div class="form-group row">
                <label for="BillStatus" class="col-sm-4 col-form-label col-form-label-sm">BillStatus:</label>
                <div class="col-sm-8">
                    <select class="custom-select form-control-sm" name="BillStatus" id="BillStatus">
                        <option selected>Status</option>
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid</option>
                        <option value="Partial">Partial</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="Bill" class="col-sm-4 col-form-label col-form-label-sm">Bill:</label>
                <div class="col-sm-8">
                    <input type="text" name="Bill" class="form-control form-control-sm" id="Bill" placeholder="Bill">
                </div>
            </div>
            <div class="form-group row">
                <label for="CustomerID" class="col-sm-4 col-form-label col-form-label-sm">CustomerID:</label>
                <div class="col-sm-8">
                    <input type="text" name="CustomerID" class="form-control form-control-sm" id="CustomerID" placeholder="CustomerID">
                </div>
            </div>
            <div class="form-group row">
                <label for="StaffID" class="col-sm-4 col-form-label col-form-label-sm">StaffID:</label>
                <div class="col-sm-8">
                    <input type="text" name="StaffID" class="form-control form-control-sm" id="StaffID" placeholder="StaffID">
                </div>
            </div>
            <div class="form-group row">
                <label for="Balance" class="col-sm-4 col-form-label col-form-label-sm">Balance:</label>
                <div class="col-sm-8">
                    <input type="text" name="Balance" class="form-control form-control-sm" id="Balance" placeholder="Balance">
                </div>
            </div>
            <div class="form-group row">
                <label for="PremiseID" class="col-sm-4 col-form-label col-form-label-sm">PremiseID:</label>
                <div class="col-sm-8">
                    <input type="text" name="PremiseID" class="form-control form-control-sm" id="PremiseID" placeholder="PremiseID">
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
            <table class="table table-striped table-sm" id="paymentlist">
                <thead>
                    <tr>
                        <!-- <th>Payment ID</th> -->
                        <th>Bill Status</th>
                        <th>Bill</th>
                        <th>CustomerID</th>
                        <th>StaffID</th>
                        <th>Balance</th>
                        <th>PremiseID</th>
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