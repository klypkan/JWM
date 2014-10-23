$(function () {
    $("[data-jwd]").initWidget();
    //$("[data-jwd]").initWidget({ attrPrefix: "data-jwd" });//call with options
});

function availableTags() {
    return {
        source: [
                "ActionScript",
                "AppleScript",
                "Asp",
                "BASIC",
                "C",
                "C++",
                "Clojure",
                "COBOL",
                "ColdFusion",
                "Erlang",
                "Fortran",
                "Groovy",
                "Haskell",
                "Java",
                "JavaScript",
                "Lisp",
                "Perl",
                "PHP",
                "Python",
                "Ruby",
                "Scala",
                "Scheme"]
    };
}
