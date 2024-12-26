// Copyright (c) 2024, omar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Bank Loan", {
	// refresh(frm) {

	// },

    repayment_months : function(frm){calculate_monthely_repayment(frm)},
    loan_amount : function(frm){calculate_monthely_repayment(frm)},
    interest : function(frm){calculate_monthely_repayment(frm)},
    
});


function calculate_monthely_repayment(frm){
    if(frm.doc.repayment_months && frm.doc.loan_amount){
        var monthly = (frm.doc.loan_amount / frm.doc.repayment_months);
        var monthly = monthly + monthly * frm.doc.interest / 100;
        frm.doc.monthely_repayment = monthly;
        // refresh_field("monthly_repayment");
        frm.set_value("monthely_repayment", monthly);
    }else{
        frm.doc.monthely_repayment = 0;
        // refresh_field("monthly_repayment");
    }
}