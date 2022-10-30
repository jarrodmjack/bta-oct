import unittest


class Contractor:
    name = None
    is_active = False
    number_of_completed_project = None
    number_of_on_going_project = None
    percentage_service_fee_rate = None
    total_amount_of_money_earned = None

    def __init__(self, name):
        self.name = name
        pass

    def get_name(self):
        return self.name

    def get_is_active(self) -> bool:
        return self.is_active

    def set_number_of_completed_projects(self, number: int):
        self.number_of_completed_project = number

    def set_number_of_on_going_projects(self, number: int):
        self.number_of_on_going_project = number

    def set_percentage_service_fee_rate(self, service_fee_rate: int):
        self.percentage_service_fee_rate = service_fee_rate
        
    def set_total_amount_of_money_earned(self, total_amount: int):
        self.total_amount_of_money_earned = total_amount
        
    def get_total_number_of_projects(self) -> int:
        return self.number_of_completed_project + self.number_of_on_going_project
    
    def get_total_commission(self) -> int:
        percentage = self.percentage_service_fee_rate / 100
        return percentage * self.total_amount_of_money_earned



class TestContractor(unittest.TestCase):
    def setUp(self):
        self.contractor = Contractor('Erico')

    def test_get_name(self):
        self.assertEqual('Erico', self.contractor.get_name())

    # Tests I have added below

    def test_get_is_active(self):
        self.assertFalse(self.contractor.get_is_active())
    
    def test_set_number_of_completed_projects(self):
        self.contractor.set_number_of_completed_projects(10)
        self.assertEquals(10, self.contractor.number_of_completed_project)
        
    def test_set_number_of_on_going_projects(self):
        self.contractor.set_number_of_on_going_projects(10)
        self.assertEquals(10, self.contractor.number_of_on_going_project)
        
    def test_set_percentage_service_fee_rate(self):
        self.contractor.set_percentage_service_fee_rate(30)
        self.assertEquals(30, self.contractor.percentage_service_fee_rate)
    
    def test_set_total_amount_of_money_earned(self):
        self.contractor.set_total_amount_of_money_earned(10000)
        self.assertEquals(10000, self.contractor.total_amount_of_money_earned)
    
    def test_get_total_number_of_projects(self):
        self.contractor.set_number_of_completed_projects(32)
        self.contractor.set_number_of_on_going_projects(15)
        self.assertEquals(47, self.contractor.get_total_number_of_projects())
    
    def test_get_total_commission(self):
        self.contractor.set_percentage_service_fee_rate(50)
        self.contractor.set_total_amount_of_money_earned(10000)
        self.assertEquals(5000, self.contractor.get_total_commission())
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    # def test_get_is_active(self):
    #     self.assertFalse(self.contractor.get_is_active())
        
    # def test_set_number_of_completed_project(self):
    #     self.contractor.set_number_of_completed_project(72)
    #     self.assertEquals(72, self.contractor.number_of_completed_project)
        
    # def test_set_number_of_on_going_project(self):
    #     self.contractor.set_number_of_on_going_project(10)
    #     self.assertEquals(10, self.contractor.number_of_on_going_project)
        
    # def test_set_percentage_service_fee_rate(self):
    #     self.contractor.set_percentage_service_fee_rate(50)
    #     self.assertEquals(50, self.contractor.percentage_service_fee_rate)
        
    # def set_total_amount_of_money_earned(self):
    #     self.contractor.set_total_amount_of_money_earned(100)
    #     self.assertEquals(100, self.contractor.total_amount_of_money_earned)
        
    # def test_get_total_commission(self):
    #     self.contractor.set_percentage_service_fee_rate(50)
    #     self.contractor.set_total_amount_of_money_earned(100)
    #     self.assertEquals(50, self.contractor.get_total_commission())