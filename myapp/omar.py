
import frappe

from erpnext.selling.doctype.customer.customer import Customer


class CustomCustomer(Customer):
    def validate(self):
        # frappe.msgprint("hello omar")
        if self.customer_name == "omar" and self.territory == "Egypt":
            frappe.msgprint("omar in egypt")
            