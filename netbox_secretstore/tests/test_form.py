from django.test import TestCase

from utilities.testing import create_test_user

from netbox_secrets.forms import UserKeyForm
from netbox_secrets.models import UserKey

from .constants import PUBLIC_KEY, SSH_PUBLIC_KEY


class UserKeyFormTestCase(TestCase):

    def setUp(self):
        user = create_test_user(
            permissions=[
                'netbox_secrets.view_secretrole',
                'netbox_secrets.add_secretrole',
            ]
        )
        self.userkey = UserKey(user=user)

    def test_upload_rsakey(self):
        form = UserKeyForm(
            data={'public_key': PUBLIC_KEY},
            instance=self.userkey,
        )
        self.assertTrue(form.is_valid())
        self.assertTrue(form.save())

    def test_upload_sshkey(self):
        form = UserKeyForm(
            data={'public_key': SSH_PUBLIC_KEY},
            instance=self.userkey,
        )
        self.assertFalse(form.is_valid())
