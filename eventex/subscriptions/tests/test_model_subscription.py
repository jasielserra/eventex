from datetime import datetime
from django.test import TestCase
from eventex.subscriptions.models import Subscription

class SubscriptionModelTest(TestCase):
    def setUp(self):
        self.obj = Subscription(
              name='Jasiel Serra',
              cpf='12345678901',
              email='jasiel_serra@hotmail.com',
              phone='75-9915787887'
        )
        self.obj.save()

    def test_create(self):
        self.assertTrue(Subscription.objects.exists())

    def test_created_at(self):
        """ Subscription must have an auto create_at attr. """
        self.assertIsInstance(self.obj.created_at, datetime)
