from rest_framework import serializers
from .models import AppDoctorCard
import cloudinary.uploader
from authentication.models import AppUser
from authentication.serializers import UserSerializer


class AppDoctorCardSerializer(serializers.ModelSerializer):
    user = UserSerializer(source='user_id', read_only=True)

    class Meta:
        model = AppDoctorCard
        fields = '__all__'
        extra_kwargs = {
            'user_id': {'required': False}
        }
        # read_only_fields = ('work_experience',)

    def create(self, validated_data):
        image = self.context['request'].FILES.get('photo')
        user_id = self.context['request'].data.get('user_id')

        user_instance = AppUser.objects.get(id=user_id)
        validated_data['user_id'] = user_instance

        if image:
            try:
                cloudinary_response = cloudinary.uploader.upload(image)
                validated_data['photo'] = cloudinary_response['url']
            except Exception as e:
                raise serializers.ValidationError(
                    {'photo': f"Error uploading image: {str(e)}"})

        return AppDoctorCard.objects.create(**validated_data)

    def update(self, instance, validated_data):
        image = self.context['request'].FILES.get('photo')
        user_id = self.context['request'].data.get('user_id')

        if user_id:
            user_instance = AppUser.objects.get(id=user_id)
            instance.user_id = user_instance

        fields_to_update = ['address', 'work_experience',
                            'appointments', 'degree', 'position']
        for field in fields_to_update:
            setattr(instance, field, validated_data.get(
                field, getattr(instance, field)))

        if image:
            try:
                cloudinary_response = cloudinary.uploader.upload(image)
                instance.photo = cloudinary_response['url']
            except Exception as e:
                raise serializers.ValidationError(
                    {'photo': f"Error uploading image: {str(e)}"})

        instance.save()
        return instance
