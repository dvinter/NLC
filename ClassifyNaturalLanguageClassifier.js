var NaturalLanguageClassifierV1 = require("watson-developer-cloud/natural-language-classifier/v1");

var naturalLanguageClassifier = new NaturalLanguageClassifierV1({
  iam_apikey: "5GPppPOIl9bOhk4oMAMyjqP_7aG2whwFq9ZOj5QcLSm5",
  url: "https://api.us-south.natural-language-classifier.watson.cloud.ibm.com/instances/bf81fb01-0052-4771-9afe-5a684e171f42",
});

naturalLanguageClassifier.classify(
  {
    text: "Vai chover hoje?",
    classifier_id: "4dbf48x937-nlc-237",
  },
  function (err, response) {
    if (err) {
      console.log("error:", err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  }
);
