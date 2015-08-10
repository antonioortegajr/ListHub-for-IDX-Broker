<script src="http://tracking.listhub.net/scripts/la.js" type="text/javascript"></script>
    <script type="text/javascript">
      try {
        var _lh = new ListHubTracker({provider:METRICS_PROVIDER_ID, test:TEST});
var ZIPCODE = document.getElementById('IDX-field-zipcode').innerHTML.substring(71).slice(0, -23);
var MLS_NUMBER = document.getElementById('IDX-field-listingID').innerHTML.substring(74).slice(0, -25);
        _lh.submit('DETAIL_PAGE_VIEWED', {lid:MLS_NUMBER, zip:ZIPCODE});
      } catch(err) {}
    </script>
