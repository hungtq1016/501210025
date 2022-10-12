export default{
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },confirm(){
            swal({
                title: "Yêu Cầu",
                text: "Bạn phải đăng nhập để thực hiện chức năng",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willLogin) => {
                (willLogin) ? this.$router.push('/login') :''
            });
        }
    },
}