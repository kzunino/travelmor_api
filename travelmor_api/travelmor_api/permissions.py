from rest_framework.permissions import BasePermission


class IsOwner(BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """
    message = "Not authorized to access this object."

    def has_object_permission(self, request, view, obj):
        return obj.user.id == request.user.id


class IsSelf(BasePermission):
    """
    Custom permission to only allow user to edit self.
    """
    message = "Not authorized to access this object."

    def has_object_permission(self, request, view, obj):
        return obj.id == request.user.id
