const productDB = [
    { id: 'f1', category: 'foundation', name: 'Kem Nền Mỏng Nhẹ Sương Mai', price: 350000, img: 'Hinhanh/kemnen/1.png' },
    { id: 'f2', category: 'foundation', name: 'Kem Nền Che Phủ Hoàn Hảo', price: 380000, img: 'Hinhanh/kemnen/2.png' },
    { id: 'f3', category: 'foundation', name: 'Kem Nền Kiềm Dầu Vintage', price: 340000, img: 'Hinhanh/kemnen/3.png' },
    { id: 'f4', category: 'foundation', name: 'Kem Nền Cấp Ẩm Căng Bóng', price: 360000, img: 'Hinhanh/kemnen/4.png' },

    { id: 'pr1', category: 'primer', name: 'Kem Lót Thu Nhỏ Lỗ Chân Lông', price: 220000, img: 'Hinhanh/kemlot/1.png' },
    { id: 'pr2', category: 'primer', name: 'Kem Lót Bắt Sáng Dịu Nhẹ', price: 250000, img: 'Hinhanh/kemlot/2.png' },
    { id: 'pr3', category: 'primer', name: 'Kem Lót Kiềm Dầu Vùng T', price: 230000, img: 'Hinhanh/kemlot/3.png' },
    { id: 'pr4', category: 'primer', name: 'Kem Lót Hiệu Chỉnh Sắc Tố', price: 260000, img: 'Hinhanh/kemlot/4.png' },

    { id: 'pw1', category: 'powder', name: 'Phấn Phủ Bột Trân Châu', price: 320000, img: 'Hinhanh/phanphu/1.png' },
    { id: 'pw2', category: 'powder', name: 'Phấn Nén Kiềm Dầu', price: 340000, img: 'Hinhanh/phanphu/2.png' },
    { id: 'pw3', category: 'powder', name: 'Phấn Phủ Dạng Bột Khoáng', price: 300000, img: 'Hinhanh/phanphu/3.png' },
    { id: 'pw4', category: 'powder', name: 'Phấn Phủ Làm Mờ Lỗ Chân Lông', price: 350000, img: 'Hinhanh/phanphu/4.png' },

    { id: 'eb1', category: 'eyebrow', name: 'Chì Kẻ Mày Loại Chuốt', price: 120000, img: 'Hinhanh/kemay/1.png' },
    { id: 'eb2', category: 'eyebrow', name: 'Chì Kẻ Mày Có Đầu Chải', price: 150000, img: 'Hinhanh/kemay/2.png' },
    { id: 'eb3', category: 'eyebrow', name: 'Chì kẻ Mày Phẩy Sợi', price: 180000, img: 'Hinhanh/kemay/3.png' },
    { id: 'eb4', category: 'eyebrow', name: 'Chì Kẻ Mày Đầu Mảnh', price: 140000, img: 'Hinhanh/kemay/4.png' },

    { id: 'e1', category: 'eyeshadow', name: 'Bảng Mắt Tone Hồng', price: 450000, img:'Hinhanh/bangmat/2.png' },
    { id: 'e2', category: 'eyeshadow', name: 'Bảng Mắt Tone Nâu Tây', price: 420000, img: 'Hinhanh/bangmat/1.png' },
    { id: 'e3', category: 'eyeshadow', name: 'Phấn Mắt Nhũ Kim Tuyến', price: 210000, img: 'Hinhanh/bangmat/3.png' },
    { id: 'e4', category: 'eyeshadow', name: 'Bảng Mắt Hồng Đất', price: 300000, img: 'Hinhanh/bangmat/4.png' },

    { id: 'b1', category: 'blush', name: 'Má Hồng Mây Phai', price: 250000, img: 'Hinhanh/mahong/1.png' },
    { id: 'b2', category: 'blush', name: 'Phấn Má Cam Sữa', price: 240000, img: 'Hinhanh/mahong/4.png' },
    { id: 'b3', category: 'blush', name: 'Má Hồng Dạng Kem', price: 270000, img: 'Hinhanh/mahong/2.png' },
    { id: 'b4', category: 'blush', name: 'Bảng Má Hồng 4 Ô', price: 320000, img: 'Hinhanh/mahong/3.png' },

    { id: 'l1', category: 'lipstick', name: 'Son Kem Đất Cổ Điển', price: 280000, img: 'Hinhanh/sonmoi/1.png' },
    { id: 'l2', category: 'lipstick', name: 'Son Thỏi Đỏ Cherry', price: 290000, img: 'Hinhanh/sonmoi/2.png' },
    { id: 'l3', category: 'lipstick', name: 'Son Tint Hồng Đào', price: 250000, img: 'Hinhanh/sonmoi/3.png' },
    { id: 'l4', category: 'lipstick', name: 'Son Dưỡng Có Màu Nhẹ', price: 180000, img: 'Hinhanh/sonmoi/5.png' },


    { id: 'cc1', category: 'concealer', name: 'Che Khuyết Điểm Dạng Lỏng', price: 190000, img: 'Hinhanh/chekhuyetdiem/4.png' },
    { id: 'cc2', category: 'concealer', name: 'Kem Triệt Sắc 5 Ô', price: 240000, img: 'Hinhanh/chekhuyetdiem/5.png' },
    { id: 'cc3', category: 'concealer', name: 'Che Khuyết Điểm Quầng Thâm', price: 210000, img: 'Hinhanh/chekhuyetdiem/1.png' },
    { id: 'cc4', category: 'concealer', name: 'Bút Che Phủ Mụn Nhỏ', price: 180000, img: 'Hinhanh/chekhuyetdiem/2.png' },

    { id: 'el1', category: 'eyeliner', name: 'Eyeliner Nâu Đen', price: 180000, img: 'Hinhanh/eyeliner/1.png' },
    { id: 'el2', category: 'eyeliner', name: 'Bút Kẻ Mắt Dạng Gel', price: 190000, img: 'Hinhanh/eyeliner/2.png' },
    { id: 'el3', category: 'eyeliner', name: 'Kẻ Mắt Nước Lâu Trôi', price: 210000, img: 'Hinhanh/eyeliner/3.png' },
    { id: 'el4', category: 'eyeliner', name: 'Chì Kẻ Viền Mắt Sáp Mềm', price: 150000, img: 'Hinhanh/eyeliner/4.png' },

    { id: 'm1', category: 'mascara', name: 'Mascara Làm Dài Mi', price: 210000, img: 'Hinhanh/chuotmi/1.png' },
    { id: 'm2', category: 'mascara', name: 'Mascara Cong Mi Chống Nước', price: 230000, img: 'Hinhanh/chuotmi/2.png' },
    { id: 'm3', category: 'mascara', name: 'Mascara Tơi Mi Tự Nhiên', price: 200000, img: 'Hinhanh/chuotmi/3.png' },
    { id: 'm4', category: 'mascara', name: 'Mascara Làm Dày Mi Kép', price: 250000, img: 'Hinhanh/chuotmi/4.png' },

    { id: 'ss1', category: 'settingspray', name: 'Xịt Khóa Nền Cấp Ẩm', price: 280000, img: 'Hinhanh/xitkhoa/1.png' },
    { id: 'ss2', category: 'settingspray', name: 'Xịt Cố Định Lâu Trôi', price: 320000, img: 'Hinhanh/xitkhoa/2.png' },
    { id: 'ss3', category: 'settingspray', name: 'Xịt Khóa Nền Căng Bóng', price: 290000, img: 'Hinhanh/xitkhoa/3.png' },
    { id: 'ss4', category: 'settingspray', name: 'Xịt Khoáng Kiềm Dầu', price: 270000, img: 'Hinhanh/xitkhoa/4.png' }
];

const categoryNames = {
    'all': 'Tất Cả Sản Phẩm', 'foundation': 'Kem Nền', 'primer': 'Kem Lót', 'powder': 'Phấn Phủ',
    'eyebrow': 'Chì Kẻ Mày', 'eyeshadow': 'Bảng Phấn Mắt', 'blush': 'Phấn Má Hồng', 'lipstick': 'Son Môi',
    'concealer': 'Kem Che Khuyết Điểm','eyeliner': 'Bút Kẻ Mắt', 'mascara': 'Chuốt Mi', 'settingspray': 'Khóa Nền'
};

const shopGrid = document.getElementById('shop-grid');
const shopTitle = document.getElementById('shop-title');

if (shopGrid) {
    const urlParams = new URLSearchParams(window.location.search);
    const currentCategory = urlParams.get('category') || 'all';

    shopTitle.innerText = categoryNames[currentCategory] || 'Sản Phẩm';

    const filteredProducts = currentCategory === 'all' 
        ? productDB 
        : productDB.filter(p => p.category === currentCategory);

    filteredProducts.forEach(p => {
        const card = `
        <div class="product-card">
            <div class="product-img" style="background-image: url('${p.img}');"></div>
            <h3>${p.name}</h3>
            <p class="price">${p.price.toLocaleString('vi-VN')}₫</p>
            <button class="btn-add-cart" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}">Thêm vào giỏ</button>
        </div>`;
        shopGrid.insertAdjacentHTML('beforeend', card);
    });
}
const featuredGrid = document.getElementById('featured-grid');

if (featuredGrid) {
    const featuredProducts = [
        productDB.find(p => p.id === 'l1'), 
        productDB.find(p => p.id === 'f1'), 
        productDB.find(p => p.id === 'b1'), 
        productDB.find(p => p.id === 'e1')  
    ];

    featuredProducts.forEach(p => {
        if(p) { 
            const card = `
            <div class="product-card">
                <div class="product-img" style="background-image: url('${p.img}');"></div>
                <h3 style="font-size: 1.1rem; margin-bottom: 10px; flex-grow: 1;">${p.name}</h3>
                <p class="price">${p.price.toLocaleString('vi-VN')}₫</p>
                <button class="btn-add-cart" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}">Thêm vào giỏ</button>
            </div>`;
            featuredGrid.insertAdjacentHTML('beforeend', card);
        }
    });
}

let cart = JSON.parse(localStorage.getItem('nangThoCart')) || [];
const cartContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.getElementById('cart-count');

function saveCart() { localStorage.setItem('nangThoCart', JSON.stringify(cart)); }

function updateCartUI() {
    if(!cartContainer) return;
    cartContainer.innerHTML = '';
    let totalMoney = 0, totalItems = 0;

    cart.forEach(item => {
        totalMoney += item.price * item.quantity;
        totalItems += item.quantity;
        
        const bgStyle = item.img.startsWith('#') ? `background-color: ${item.img};` : `background-image: url('${item.img}');`;
        
        const itemHTML = `
        <div class="cart-item">
            <div class="cart-item-img" style="${bgStyle} background-size: cover; background-position: center;"></div>
            <div style="flex:1;">
                <h4 style="font-size:0.95rem">${item.name}</h4>
                <p style="color:var(--primary-color); font-weight:bold;">${(item.price).toLocaleString('vi-VN')}₫</p>
                <div class="quantity-control">
                    <button class="qty-btn btn-decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn btn-increase" data-id="${item.id}">+</button>
                    <button style="border:none; background:none; color:#A37474; margin-left:auto; cursor:pointer;" class="remove-item" data-id="${item.id}">Xóa</button>
                </div>
            </div>
        </div>`;
        cartContainer.insertAdjacentHTML('beforeend', itemHTML);
    });

    cartCount.innerText = totalItems;
    cartTotalPrice.innerText = totalMoney.toLocaleString('vi-VN') + '₫';
    saveCart();
}

updateCartUI();

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-add-cart')) {
        const btn = e.target;
        const id = btn.getAttribute('data-id');
        const name = btn.getAttribute('data-name');
        const price = parseInt(btn.getAttribute('data-price'));
        const img = btn.getAttribute('data-img');

        const existingItem = cart.find(item => item.id === id);
        if (existingItem) existingItem.quantity += 1;
        else cart.push({ id, name, price, img, quantity: 1 });

        updateCartUI();
        

        document.getElementById('cart-sidebar').classList.add('active');
        document.getElementById('cart-overlay').classList.add('active');

        const originalText = btn.innerText;
        btn.innerText = "Đã thêm 💖";
        setTimeout(() => btn.innerText = originalText, 1500);
    }
});

if(cartContainer) {
    cartContainer.addEventListener('click', function(e) {
        const id = e.target.getAttribute('data-id');
        if (!id) return;
        const item = cart.find(i => i.id === id);
        
        if (e.target.classList.contains('btn-increase')) item.quantity++;
        else if (e.target.classList.contains('btn-decrease')) {
            item.quantity--;
            if (item.quantity === 0) cart = cart.filter(i => i.id !== id);
        }
        else if (e.target.classList.contains('remove-item')) cart = cart.filter(i => i.id !== id);
        updateCartUI();
    });
}
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
document.getElementById('cart-icon').addEventListener('click', () => {
    cartSidebar.classList.add('active'); cartOverlay.classList.add('active');
});
function closeCart() {
    cartSidebar.classList.remove('active'); cartOverlay.classList.remove('active');
}
document.getElementById('close-cart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

const btnCheckout = document.getElementById('btn-checkout');
const checkoutOverlay = document.getElementById('checkout-overlay');
const closeCheckoutBtn = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
const checkoutFinalPrice = document.getElementById('checkout-final-price');

const successOverlay = document.getElementById('success-overlay');
const closeSuccessBtn = document.getElementById('close-success');

if (btnCheckout) {
    btnCheckout.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Giỏ hàng của Nàng đang trống. Hãy ghé cửa hàng chọn vài món đồ xinh xắn trước nhé!');
            return;
        }
        let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if(checkoutFinalPrice) checkoutFinalPrice.innerText = total.toLocaleString('vi-VN') + '₫';
        closeCart(); 
        checkoutOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeCheckoutBtn) {
    closeCheckoutBtn.addEventListener('click', () => {
        checkoutOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    });
}

if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        checkoutOverlay.classList.remove('active');
        successOverlay.classList.add('active');
        cart = [];
        updateCartUI();
        checkoutForm.reset();
    });
}


if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', () => {
        successOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}