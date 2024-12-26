# Copyright (c) 2024, omar and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class BankLoan(Document):
	
	def on_update(self):
		self.schedule = []
		
			
