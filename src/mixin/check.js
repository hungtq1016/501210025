export default{
    methods: {
        confirm() {
            swal({
                title: "Yêu Cầu",
                text: "Bạn phải đăng nhập để thực hiện chức năng",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willLogin) => {
                (willLogin) ? this.$router.push('/login') :''
            });
        },
    },
}