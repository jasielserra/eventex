from django.core.exceptions import ValidationError
from django.test import TestCase
from eventex.core.models import Speaker, Contact

class ContactModelTest(TestCase):
    def setUp(self):
        self.speaker = Speaker.objects.create(
            name = 'Jasiel Serra',
            slug = 'jasiel-serra',
            photo = 'http://hbn.link/hb-pic'
        )

    def test_email(self):
        contact = Contact.objects.create(speaker = self.speaker, kind = Contact.EMAIL,
                                         value = 'jasiel_serra@hotmail.com'
        )

    def test_phone(self):
        contact = Contact.objects.create(speaker = self.speaker, kind = Contact.EMAIL,
                                         value = '75-991578787'
        )

        self.assertTrue(Contact.objects.exists())

    def test_choices(self):
        ''' Contact kind should be limited to E or P.'''
        contact = Contact(speaker = self.speaker, kind = 'A', value = 'B')
        self.assertRaises(ValidationError, contact.full_clean)

    def test_str(self):
        contact = Contact(speaker = self.speaker, kind =Contact.EMAIL, value = 'jasiel_serra@hotmail.com')
        self.assertEqual('jasiel_serra@hotmail.com', str(contact))

class ContactManagerTest(TestCase):
    def setUp(self):
        s = Speaker.objects.create(
            name = 'Jasiel Serra',
            slug = 'jasiel-serra',
            photo = 'http://hbn.link/hb-pic'
        )

        s.contact_set.create(kind=Contact.EMAIL, value='jasielserra@gmail.com')
        s.contact_set.create(kind=Contact.PHONE, value='75-99157-8787')

    def test_emails(self):
        qs = Contact.objects.emails()
        expected = ['jasielserra@gmail.com']
        self.assertQuerysetEqual(qs, expected, lambda o: o.value)

    def test_phones(self):
        qs = Contact.objects.phones()
        expected = ['75-99157-8787']
        self.assertQuerysetEqual(qs, expected, lambda o: o.value)