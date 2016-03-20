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
