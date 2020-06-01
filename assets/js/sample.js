var createConstraintBlock = function(constraint){            
    var id = "div_constraintBlock" + ($(".input_constraint").length || 0);
    return $("<div>").attr("id", id).addClass("form-group row").append(
            $("<input type='button'/>").addClass("deleteConstraint")
                .attr({"for" : "#" + id, "value" : "x"}),
            $("<div>").addClass("col-sm-10").append(
                $("<input type='text'>").addClass("input_constraint form-control").attr({"for" : "#" + id, "value" : constraint})
            )
    );
};

function dummy(){
    $('#problemObjective').val('30x1 + 40x2');

    $("#constraintArea").prepend( createConstraintBlock('3x1 + 4x2 <= 120') );
    $("#constraintArea").prepend( createConstraintBlock('x2 <= 20') );
    $("#constraintArea").prepend( createConstraintBlock('2x1 + 2x2 <= 40') );
}