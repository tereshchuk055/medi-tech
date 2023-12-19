from rest_framework import serializers
from .models import AppNews


class NewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = AppNews
        fields = ['id', 'title', 'content', 'pub_date']

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)

        instance.save()
        return instance
