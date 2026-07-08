// NovaRx App State Management and Logic - Liquid Glass & Auth Edition

class NovaRxApp {
    constructor() {
        // Initial Datasets (Mock data representing products and clinical staff scaled to Indian Rupees)
        this.defaultMedicines = [
            {
                id: 'm1',
                name: 'Paracetamol Extra',
                category: 'Pain Relief',
                price: 60.00,
                dosage: '500mg',
                icon: 'pill',
                description: 'Fast and effective relief of headaches, toothaches, backaches, and reducing fever.',
                composition: 'Paracetamol 500mg, Caffeine 65mg',
                sideEffects: 'Mild dizziness, nausea (rarely), skin rash in case of allergic reactions.',
                usage: 'Take 1-2 tablets every 4 to 6 hours as needed. Do not exceed 8 tablets in 24 hours.'
            },
            {
                id: 'm2',
                name: 'Lipidex Atorvastatin',
                category: 'Cardiology',
                price: 240.00,
                dosage: '20mg',
                icon: 'activity',
                description: 'Used along with a proper diet to help lower "bad" cholesterol and fats.',
                composition: 'Atorvastatin Calcium 20mg',
                sideEffects: 'Muscle ache, joint pain, diarrhea, mild headache.',
                usage: 'Usually taken once daily with or without food, preferably at the same time each day.'
            },
            {
                id: 'm3',
                name: 'Amoxil (Amoxicillin)',
                category: 'Respiratory',
                price: 180.00,
                dosage: '500mg',
                icon: 'shield',
                description: 'Broad-spectrum antibiotic used to treat bacterial infections of the chest, ears, throat, and sinus.',
                composition: 'Amoxicillin Trihydrate 500mg',
                sideEffects: 'Diarrhea, nausea, stomach pain, vomiting.',
                usage: 'Complete the entire course prescribed. Typically 1 tablet three times a day.'
            },
            {
                id: 'm4',
                name: 'Glucophage Metformin',
                category: 'Diabetes',
                price: 150.00,
                dosage: '850mg',
                icon: 'droplet',
                description: 'Oral diabetes medicine that helps control blood sugar levels for people with type 2 diabetes.',
                composition: 'Metformin Hydrochloride 850mg',
                sideEffects: 'Stomach upset, metallic taste in mouth, bloating, gas.',
                usage: 'Take with meals to reduce stomach side effects. Follow doctor guidelines.'
            },
            {
                id: 'm5',
                name: 'Multivitamin Active',
                category: 'Vitamins',
                price: 220.00,
                dosage: '30 Tablets',
                icon: 'sun',
                description: 'Daily multivitamin and essential mineral supplement to boost immunity, energy, and overall health.',
                composition: 'Vitamin A, C, D3, E, B-Complex, Zinc, Magnesium, Calcium',
                sideEffects: 'No common side effects when taken as directed.',
                usage: 'Take one capsule daily with breakfast or lunch. Swallow with water.'
            },
            {
                id: 'm6',
                name: 'Nexium (Omeprazole)',
                category: 'Digestive',
                price: 310.00,
                dosage: '20mg',
                icon: 'database',
                description: 'Proton pump inhibitor (PPI) that decreases the amount of acid produced in the stomach.',
                composition: 'Omeprazole Magnesium 20mg',
                sideEffects: 'Headache, stomach pain, gas, nausea.',
                usage: 'Take 1 tablet in the morning 30 minutes before food.'
            },
            {
                id: 'm7',
                name: 'Zyrtec (Cetirizine)',
                category: 'Respiratory',
                price: 110.00,
                dosage: '10mg',
                icon: 'wind',
                description: 'Provides 24-hour relief of allergy symptoms such as sneezing, runny nose, and itchy eyes.',
                composition: 'Cetirizine Hydrochloride 10mg',
                sideEffects: 'Mild drowsiness, dry mouth, tiredness.',
                usage: 'Take one tablet daily with water. Do not exceed recommended dosage.'
            },
            {
                id: 'm8',
                name: 'Ibuprofen Rapid',
                category: 'Pain Relief',
                price: 80.00,
                dosage: '400mg',
                icon: 'zap',
                description: 'Nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, swelling, and inflammation.',
                composition: 'Ibuprofen Lysine 400mg',
                sideEffects: 'Heartburn, mild stomach upset, headache.',
                usage: 'Take 1 tablet with food. Max 3 tablets in 24 hours.'
            }
        ];

        this.defaultDoctors = [
            {
                id: 'd1',
                name: 'Dr. Sarah Jenkins',
                specialty: 'Cardiology',
                rating: '4.9',
                experience: '12 years',
                consultationFee: 800,
                nextAvailable: 'Today',
                slots: ['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'],
                bio: 'Dr. Sarah Jenkins is an Ivy League trained Cardiologist specializing in preventive cardiology, heart failure management, and cardiovascular disease screenings.'
            },
            {
                id: 'd2',
                name: 'Dr. Marcus Vance',
                specialty: 'Pediatrics',
                rating: '4.8',
                experience: '9 years',
                consultationFee: 500,
                nextAvailable: 'Tomorrow',
                slots: ['09:00 AM', '10:30 AM', '01:00 PM', '03:00 PM'],
                bio: 'Dr. Marcus Vance is known for his friendly demeanor with children, offering primary care services, developmental evaluations, and immunizations.'
            },
            {
                id: 'd3',
                name: 'Dr. Elena Rostova',
                specialty: 'Neurology',
                rating: '4.9',
                experience: '15 years',
                consultationFee: 1200,
                nextAvailable: 'July 10',
                slots: ['11:00 AM', '02:30 PM', '05:00 PM'],
                bio: 'Dr. Elena Rostova focuses on neuromuscular disorders, headache management, and neuro-diagnostics, bringing over 15 years of expert experience.'
            },
            {
                id: 'd4',
                name: 'Dr. Liam O\'Connor',
                specialty: 'Orthopedics',
                rating: '4.7',
                experience: '11 years',
                consultationFee: 900,
                nextAvailable: 'Today',
                slots: ['03:30 PM', '04:00 PM', '06:00 PM'],
                bio: 'Dr. Liam O\'Connor specializes in joint replacement surgery, sports medicine, and minimally invasive orthopaedic procedures.'
            },
            {
                id: 'd5',
                name: 'Dr. Priya Patel',
                specialty: 'Dermatology',
                rating: '4.9',
                experience: '8 years',
                consultationFee: 750,
                nextAvailable: 'July 9',
                slots: ['10:00 AM', '12:00 PM', '03:30 PM', '04:15 PM'],
                bio: 'Dr. Priya Patel offers expertise in cosmetic dermatology, acne therapy, skin cancer prevention screenings, and advanced laser treatments.'
            },
            {
                id: 'd6',
                name: 'Dr. Rajesh Mehta',
                specialty: 'General Physician',
                rating: '4.8',
                experience: '14 years',
                consultationFee: 500,
                nextAvailable: 'Today',
                slots: ['10:00 AM', '12:00 PM', '03:00 PM', '05:30 PM'],
                bio: 'Dr. Rajesh Mehta is a senior General Physician specializing in primary care, chronic disease management, and family medicine.'
            },
            {
                id: 'd7',
                name: 'Dr. Anjali Desai',
                specialty: 'MD Internal Medicine',
                rating: '4.9',
                experience: '10 years',
                consultationFee: 650,
                nextAvailable: 'Tomorrow',
                slots: ['09:30 AM', '11:00 AM', '02:00 PM', '04:00 PM'],
                bio: 'Dr. Anjali Desai is a certified MD in Internal Medicine, specializing in diagnostics, metabolic disorders, and adult preventative care.'
            }
        ];

        // State variables loaded from LocalStorage
        this.medicines = JSON.parse(localStorage.getItem('novarx_medicines')) || this.defaultMedicines;
        this.doctors = JSON.parse(localStorage.getItem('novarx_doctors')) || this.defaultDoctors;

        // Auto-merge Rajesh and Anjali if not already present
        if (!this.doctors.some(d => d.name === 'Dr. Rajesh Mehta')) {
            this.doctors.push(this.defaultDoctors.find(d => d.name === 'Dr. Rajesh Mehta'));
        }
        if (!this.doctors.some(d => d.name === 'Dr. Anjali Desai')) {
            this.doctors.push(this.defaultDoctors.find(d => d.name === 'Dr. Anjali Desai'));
        }
        localStorage.setItem('novarx_doctors', JSON.stringify(this.doctors));

        // Cart data
        let storedCart = [];
        try {
            storedCart = JSON.parse(localStorage.getItem('novarx_cart'));
            if (!Array.isArray(storedCart)) storedCart = [];
        } catch (e) {
            storedCart = [];
        }
        this.cart = storedCart;

        // Appointments data
        let storedAppts = [];
        try {
            storedAppts = JSON.parse(localStorage.getItem('novarx_appointments'));
            if (!Array.isArray(storedAppts)) storedAppts = [];
        } catch (e) {
            storedAppts = [];
        }
        this.appointments = storedAppts;

        // Orders data
        let storedOrders = [];
        try {
            storedOrders = JSON.parse(localStorage.getItem('novarx_orders'));
            if (!Array.isArray(storedOrders)) storedOrders = [];
        } catch (e) {
            storedOrders = [];
        }
        this.orders = storedOrders;
        
        // Session State (Guest, User, Admin)
        let storedSession = null;
        try {
            storedSession = JSON.parse(localStorage.getItem('novarx_session'));
        } catch (e) {
            storedSession = null;
        }
        this.currentUser = storedSession;
        
        // Registered Users Database
        let storedUsers = [];
        try {
            storedUsers = JSON.parse(localStorage.getItem('novarx_users'));
            if (!Array.isArray(storedUsers)) storedUsers = [];
        } catch (e) {
            storedUsers = [];
        }
        if (storedUsers.length === 0) {
            storedUsers = [
                { name: 'John Doe', email: 'john@gmail.com', password: 'password', mobile: '9876543210' }
            ];
        }
        this.users = storedUsers;
        localStorage.setItem('novarx_users', JSON.stringify(this.users));
        
        this.selectedSpecialty = 'all';
        this.selectedCategory = 'all';

        // Access Logs
        let storedLogs = [];
        try {
            storedLogs = JSON.parse(localStorage.getItem('novarx_access_logs'));
            if (!Array.isArray(storedLogs)) storedLogs = [];
        } catch (e) {
            storedLogs = [];
        }
        this.accessLogs = storedLogs;

        this.initDOM();
    }

    initDOM() {
        // Cache DOM elements
        this.navLinks = document.querySelectorAll('.nav-link');
        this.tabContents = document.querySelectorAll('.tab-content');
        
        this.featuredMedicinesList = document.getElementById('featuredMedicinesList');
        this.featuredDoctorsList = document.getElementById('featuredDoctorsList');
        
        this.medicinesGrid = document.getElementById('medicinesGrid');
        this.medicineSearch = document.getElementById('medicineSearch');
        this.medicineCategoryTabs = document.getElementById('medicineCategoryTabs');
        
        this.doctorsGrid = document.getElementById('doctorsGrid');
        this.doctorSearch = document.getElementById('doctorSearch');
        this.specialtyFilterTabs = document.getElementById('specialtyFilterTabs');
        
        this.dashboardAppointmentsList = document.getElementById('dashboardAppointmentsList');
        this.dashboardOrdersList = document.getElementById('dashboardOrdersList');
        this.dashboardWelcomeText = document.getElementById('dashboardWelcomeText');
        
        // Admin controls
        this.adminAppointmentsList = document.getElementById('adminAppointmentsList');
        this.adminOrdersList = document.getElementById('adminOrdersList');
        this.adminMedicinesList = document.getElementById('adminMedicinesList');
        this.adminDoctorsList = document.getElementById('adminDoctorsList');
        this.adminPatientsList = document.getElementById('adminPatientsList');
        this.adminAccessLogsList = document.getElementById('adminAccessLogsList');
        
        // Admin statistics metrics
        this.adminStatRevenue = document.getElementById('adminStatRevenue');
        this.adminStatPatients = document.getElementById('adminStatPatients');
        this.adminStatAppointments = document.getElementById('adminStatAppointments');
        
        // Header actions
        this.cartToggleBtn = document.getElementById('cartToggleBtn');
        this.closeCartBtn = document.getElementById('closeCartBtn');
        this.cartOverlay = document.getElementById('cartOverlay');
        this.cartDrawer = document.getElementById('cartDrawer');
        this.cartDrawerBody = document.getElementById('cartDrawerBody');
        
        this.cartBadge = document.getElementById('cartBadge');
        this.cartSubtotal = document.getElementById('cartSubtotal');
        this.cartTotal = document.getElementById('cartTotal');
        this.checkoutBtn = document.getElementById('checkoutBtn');
        
        this.modalOverlay = document.getElementById('modalOverlay');
        this.modalCloseBtn = document.getElementById('modalCloseBtn');
        this.modalContent = document.getElementById('modalContent');
        
        this.toastContainer = document.getElementById('toastContainer');
        this.logoLink = document.getElementById('logoLink');
        this.navLoginBtn = document.getElementById('navLoginBtn');
        this.userProfileNav = document.getElementById('userProfileNav');
        this.navRoleBadge = document.getElementById('navRoleBadge');
        this.logoutBtn = document.getElementById('logoutBtn');
        this.authBtnArea = document.getElementById('authBtnArea');

        // Setup Event Listeners
        this.setupNavigation();
        this.setupFilters();
        this.setupCartDrawer();
        this.setupModals();
        this.setupAuth();
        
        // Initial Render
        this.renderAll();
    }

    setupNavigation() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = link.getAttribute('data-tab');
                this.navigateToTab(tabName);
            });
        });

        this.logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.navigateToTab('home');
        });
    }

    navigateToTab(tabName) {
        // Tab access guards
        if (tabName === 'dashboard' && !this.currentUser) {
            this.showToast('Please sign in to access your dashboard', 'info');
            this.openLoginModal();
            return;
        }

        if (tabName === 'admin' && (!this.currentUser || this.currentUser.role !== 'admin')) {
            this.showToast('Unauthorized access!', 'danger');
            this.navigateToTab('home');
            return;
        }

        window.location.hash = tabName;
        
        this.navLinks.forEach(l => {
            if (l.getAttribute('data-tab') === tabName) {
                l.classList.add('active');
            } else {
                l.classList.remove('active');
            }
        });

        this.tabContents.forEach(content => {
            const sectionId = content.id.replace('-section', '');
            if (sectionId === tabName) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setupFilters() {
        this.medicineSearch.addEventListener('input', () => this.renderPharmacyList());
        this.doctorSearch.addEventListener('input', () => this.renderDoctorsList());
    }

    setupCartDrawer() {
        const toggleCart = (open) => {
            if (open) {
                this.cartDrawer.classList.add('active');
                this.cartOverlay.classList.add('active');
                this.renderCart();
            } else {
                this.cartDrawer.classList.remove('active');
                this.cartOverlay.classList.remove('active');
            }
        };

        this.cartToggleBtn.addEventListener('click', () => toggleCart(true));
        this.closeCartBtn.addEventListener('click', () => toggleCart(false));
        this.cartOverlay.addEventListener('click', () => toggleCart(false));

        this.checkoutBtn.addEventListener('click', () => {
            if (!this.currentUser) {
                toggleCart(false);
                this.showToast('Please sign in to checkout', 'info');
                this.openLoginModal();
                return;
            }
            if (this.currentUser.role === 'admin') {
                this.showToast('Admin accounts cannot place orders', 'danger');
                return;
            }
            if (this.cart.length === 0) {
                this.showToast('Your cart is empty', 'info');
                return;
            }
            toggleCart(false);
            this.openCheckoutModal();
        });
    }

    setupModals() {
        const closeModal = () => {
            this.modalOverlay.classList.remove('active');
        };
        this.modalCloseBtn.addEventListener('click', closeModal);
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                closeModal();
            }
        });
    }

    setupAuth() {
        this.navLoginBtn.addEventListener('click', () => this.openLoginModal());
        this.logoutBtn.addEventListener('click', () => this.handleLogout());
    }

    // STATE UPDATES & PERSISTENCE
    saveCart() {
        localStorage.setItem('novarx_cart', JSON.stringify(this.cart));
        this.updateCartCountBadge();
    }

    saveAppointments() {
        localStorage.setItem('novarx_appointments', JSON.stringify(this.appointments));
        this.renderDashboard();
        this.renderAdminPanel();
    }

    saveOrders() {
        localStorage.setItem('novarx_orders', JSON.stringify(this.orders));
        this.renderDashboard();
        this.renderAdminPanel();
    }

    saveMedicines() {
        localStorage.setItem('novarx_medicines', JSON.stringify(this.medicines));
        this.renderPharmacyList();
        this.renderHomeFeatured();
    }

    saveDoctors() {
        localStorage.setItem('novarx_doctors', JSON.stringify(this.doctors));
        this.renderDoctorsList();
        this.renderSpecialtyTabs();
        this.renderHomeFeatured();
    }

    updateCartCountBadge() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        this.cartBadge.textContent = count;
        this.cartBadge.style.display = count > 0 ? 'flex' : 'none';
    }

    // AUTHENTICATION MODAL LOGIC
    openLoginModal() {
        this.modalContent.innerHTML = `
            <div class="booking-modal-layout">
                <div class="auth-tabs">
                    <div class="auth-tab active" id="tabSignIn" onclick="app.switchAuthTab('signIn')">Sign In</div>
                    <div class="auth-tab" id="tabSignUp" onclick="app.switchAuthTab('signUp')">Register</div>
                    <div class="auth-tab" id="tabAdmin" onclick="app.switchAuthTab('admin')">Admin Hub</div>
                </div>
                
                <!-- Patient Sign In Form -->
                <form id="authSignInForm" class="booking-form" onsubmit="app.handleAuthSubmit(event, 'signIn')">
                    <div class="form-group">
                        <label for="authSignInEmail">Email or Mobile Number</label>
                        <input type="text" id="authSignInEmail" required placeholder="Email or 10-digit Mobile">
                    </div>
                    <div class="form-group">
                        <label for="authSignInPass">Password</label>
                        <input type="password" id="authSignInPass" required placeholder="Enter your password">
                    </div>
                    <button type="submit" class="btn btn-primary-glass btn-block" style="margin-top: 1rem;">
                        Sign In
                    </button>
                </form>

                <!-- Patient Register Form (User Creation) -->
                <form id="authSignUpForm" class="booking-form" style="display: none;" onsubmit="app.handleAuthSubmit(event, 'signUp')">
                    <div class="form-group">
                        <label for="authRegisterName">Full Name</label>
                        <input type="text" id="authRegisterName" required placeholder="e.g. John Doe">
                    </div>
                    <div class="form-group">
                        <label for="authRegisterEmail">Email Address</label>
                        <input type="email" id="authRegisterEmail" required placeholder="name@domain.com">
                    </div>
                    <div class="form-group">
                        <label for="authRegisterMobile">Mobile Number</label>
                        <input type="tel" id="authRegisterMobile" required placeholder="e.g. 98765 43210">
                    </div>
                    <div class="form-group">
                        <label for="authRegisterPass">Create Password</label>
                        <input type="password" id="authRegisterPass" required placeholder="Min 6 characters">
                    </div>
                    <button type="submit" class="btn btn-primary-glass btn-block" style="margin-top: 1rem;">
                        Create Account
                    </button>
                </form>

                <!-- Admin Sign In Form -->
                <form id="authAdminForm" class="booking-form" style="display: none;" onsubmit="app.handleAuthSubmit(event, 'admin')">
                    <div class="form-group">
                        <label for="authAdminUser">Admin Username</label>
                        <input type="text" id="authAdminUser" required placeholder="Username">
                    </div>
                    <div class="form-group">
                        <label for="authAdminPass">Password</label>
                        <input type="password" id="authAdminPass" required placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary-glass btn-block" style="margin-top: 1rem;">
                        Secure Admin Sign In
                    </button>
                </form>
            </div>
        `;
        this.modalOverlay.classList.add('active');
    }

    switchAuthTab(type) {
        const tabSignIn = document.getElementById('tabSignIn');
        const tabSignUp = document.getElementById('tabSignUp');
        const tabAdmin = document.getElementById('tabAdmin');
        
        const formSignIn = document.getElementById('authSignInForm');
        const formSignUp = document.getElementById('authSignUpForm');
        const formAdmin = document.getElementById('authAdminForm');

        // Reset active tab styles
        tabSignIn.classList.remove('active');
        tabSignUp.classList.remove('active');
        tabAdmin.classList.remove('active');

        // Hide all forms
        formSignIn.style.display = 'none';
        formSignUp.style.display = 'none';
        formAdmin.style.display = 'none';

        if (type === 'signIn') {
            tabSignIn.classList.add('active');
            formSignIn.style.display = 'flex';
        } else if (type === 'signUp') {
            tabSignUp.classList.add('active');
            formSignUp.style.display = 'flex';
        } else {
            tabAdmin.classList.add('active');
            formAdmin.style.display = 'flex';
        }
    }

    handleAuthSubmit(event, type) {
        event.preventDefault();
        
        if (type === 'signIn') {
            const loginQuery = document.getElementById('authSignInEmail').value.trim().toLowerCase();
            const pass = document.getElementById('authSignInPass').value;

            if (!loginQuery || !pass) {
                this.showToast('Please fill out all fields', 'danger');
                return;
            }

            const cleanQuery = loginQuery.replace(/[-\s]/g, '');
            const user = this.users.find(u => 
                u && 
                u.email && 
                (u.email.toLowerCase() === loginQuery || (u.mobile && u.mobile.replace(/[-\s]/g, '') === cleanQuery)) && 
                u.password === pass
            );
            if (user) {
                this.currentUser = { name: user.name, email: user.email, role: 'user' };
                this.showToast(`Welcome back, ${user.name}!`, 'success');
                this.logActivity(user.email, user.name, 'Patient', 'User successfully authenticated');
            } else {
                this.showToast('Invalid credentials (email/mobile or password)', 'danger');
                this.logActivity('guest', 'Guest', 'Guest', `Authentication failed (Invalid login email: "${loginQuery}")`);
                return;
            }
        } else if (type === 'signUp') {
            const name = document.getElementById('authRegisterName').value.trim();
            const email = document.getElementById('authRegisterEmail').value.trim().toLowerCase();
            const mobile = document.getElementById('authRegisterMobile').value.trim();
            const pass = document.getElementById('authRegisterPass').value;

            if (!name || !email || !mobile || !pass) {
                this.showToast('Please fill out all registration fields', 'danger');
                return;
            }

            if (pass.length < 6) {
                this.showToast('Password must be at least 6 characters long', 'danger');
                return;
            }

            const existing = this.users.find(u => u && u.email === email);
            if (existing) {
                this.showToast('An account with this email already exists', 'danger');
                return;
            }

            const newUser = { name, email, mobile, password: pass };
            this.users.push(newUser);
            localStorage.setItem('novarx_users', JSON.stringify(this.users));

            this.currentUser = { name: newUser.name, email: newUser.email, role: 'user' };
            this.showToast(`Account created! Welcome, ${newUser.name}!`, 'success');
            this.logActivity(newUser.email, newUser.name, 'Patient', 'Registered new user account');
        } else {
            const user = document.getElementById('authAdminUser').value.trim();
            const pass = document.getElementById('authAdminPass').value.trim();

            if (user === 'Hrik' && pass === 'hrik') {
                this.currentUser = { name: 'Hrik', role: 'admin' };
                this.showToast('Administrator command unlocked', 'success');
                this.logActivity('admin_hrik', 'Hrik', 'Admin', 'Administrator command access authenticated');
            } else {
                this.showToast('Invalid administrator credentials!', 'danger');
                this.logActivity('guest', 'Guest', 'Guest', `Authentication failed (Invalid administrator username: "${user}")`);
                return;
            }
        }

        localStorage.setItem('novarx_session', JSON.stringify(this.currentUser));
        this.modalOverlay.classList.remove('active');
        this.updateAuthUI();
        
        if (this.currentUser.role === 'admin') {
            this.navigateToTab('admin');
        } else {
            this.navigateToTab('home');
        }
    }

    handleLogout() {
        if (this.currentUser) {
            this.logActivity(this.currentUser.email || 'admin_hrik', this.currentUser.name, this.currentUser.role === 'admin' ? 'Admin' : 'Patient', 'User logged out');
        }
        this.currentUser = null;
        localStorage.removeItem('novarx_session');
        this.showToast('Logged out successfully', 'info');
        this.updateAuthUI();
        this.navigateToTab('home');
    }

    handleProfileClick() {
        if (this.currentUser) {
            if (this.currentUser.role === 'admin') {
                this.navigateToTab('admin');
            } else {
                this.navigateToTab('dashboard');
            }
        }
    }

    updateAuthUI() {
        const headerBookBtn = document.getElementById('headerBookBtn');
        if (this.currentUser) {
            this.authBtnArea.style.display = 'none';
            this.userProfileNav.style.display = 'flex';
            this.logoutBtn.style.display = 'inline-flex';
            this.navRoleBadge.textContent = this.currentUser.role === 'admin' ? 'Admin' : this.currentUser.name;
            
            // Set dynamic title description for hovering
            this.userProfileNav.title = this.currentUser.role === 'admin' ? 'View Admin Panel' : 'View Account Dashboard';
            
            // Dashboard Welcome text
            this.dashboardWelcomeText.textContent = `Welcome back, ${this.currentUser.name}`;
            
            if (this.currentUser.role === 'admin') {
                if (headerBookBtn) headerBookBtn.style.display = 'none';
            } else {
                if (headerBookBtn) headerBookBtn.style.display = 'block';
            }
        } else {
            this.authBtnArea.style.display = 'block';
            this.userProfileNav.style.display = 'none';
            this.logoutBtn.style.display = 'none';
            this.dashboardWelcomeText.textContent = 'Welcome back, Guest';
            if (headerBookBtn) headerBookBtn.style.display = 'block';
        }
        
        this.renderDashboard();
        this.renderAdminPanel();
    }

    // TOAST NOTIFICATIONS
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let iconName = 'info';
        if (type === 'success') iconName = 'check-circle';
        if (type === 'danger') iconName = 'alert-triangle';

        toast.innerHTML = `
            <i data-lucide="${iconName}"></i>
            <span>${message}</span>
        `;
        
        this.toastContainer.appendChild(toast);
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s reverse forwards';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    // RENDER FUNCTIONS
    renderAll() {
        this.updateAuthUI();
        this.updateCartCountBadge();
        this.renderHomeFeatured();
        this.renderCategoryTabs();
        this.renderPharmacyList();
        this.renderSpecialtyTabs();
        this.renderDoctorsList();
    }

    renderHomeFeatured() {
        this.featuredMedicinesList.innerHTML = '';
        this.medicines.slice(0, 3).forEach(med => {
            this.featuredMedicinesList.appendChild(this.createMedicineCard(med));
        });

        this.featuredDoctorsList.innerHTML = '';
        this.doctors.slice(0, 3).forEach(doc => {
            this.featuredDoctorsList.appendChild(this.createDoctorCard(doc));
        });

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    createMedicineCard(med) {
        const card = document.createElement('div');
        card.className = 'medicine-card';
        card.addEventListener('click', () => app.openMedicineDetailsModal(med.id));
        card.innerHTML = `
            <div class="med-badge-wrapper">
                <span class="badge badge-accent">${med.dosage}</span>
            </div>
            <div class="medicine-card-image">
                <i data-lucide="${med.icon || 'pill'}"></i>
            </div>
            <div class="medicine-card-content">
                <span class="medicine-category">${med.category}</span>
                <h3>${med.name}</h3>
                <p class="medicine-desc-short">${med.description}</p>
                <div class="medicine-footer-row" onclick="event.stopPropagation();">
                    <div class="medicine-price">₹${med.price.toFixed(0)}</div>
                    <button class="btn btn-primary-glass btn-sm" onclick="app.addToCart('${med.id}')">
                        <i data-lucide="shopping-bag"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        return card;
    }

    createDoctorCard(doc) {
        const card = document.createElement('div');
        card.className = 'doctor-card';
        card.innerHTML = `
            <div class="doctor-card-top">
                <div class="doctor-avatar-wrapper">
                    <i data-lucide="user-round-check"></i>
                    <div class="doctor-rating"><i data-lucide="star" style="width: 12px; height: 12px; fill: #f59e0b; stroke: none;"></i> ${doc.rating}</div>
                </div>
                <h3>${doc.name}</h3>
                <span class="doctor-specialty">${doc.specialty}</span>
                <span class="doctor-exp">Exp: ${doc.experience}</span>
            </div>
            <div class="doctor-card-body">
                <div class="doctor-detail-item">
                    <i data-lucide="indian-rupee"></i>
                    <span>Consultation: <strong>₹${doc.consultationFee}</strong></span>
                </div>
                <div class="doctor-detail-item">
                    <i data-lucide="calendar"></i>
                    <span>Availability: <strong>${doc.nextAvailable}</strong></span>
                </div>
            </div>
            <div class="doctor-card-footer">
                <button class="btn btn-primary-glass btn-block" onclick="app.openAppointmentBookingModal('${doc.id}')">
                    Book Appointment
                </button>
            </div>
        `;
        return card;
    }

    renderCategoryTabs() {
        const categories = ['all', ...new Set(this.medicines.map(m => m.category))];
        this.medicineCategoryTabs.innerHTML = '';
        
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `specialty-tab ${this.selectedCategory === cat ? 'active' : ''}`;
            btn.textContent = cat === 'all' ? 'All Medicines' : cat;
            btn.addEventListener('click', () => {
                this.selectedCategory = cat;
                this.renderCategoryTabs();
                this.renderPharmacyList();
            });
            this.medicineCategoryTabs.appendChild(btn);
        });
    }

    renderPharmacyList() {
        const query = this.medicineSearch.value.toLowerCase().trim();
        const category = this.selectedCategory;

        const filtered = this.medicines.filter(med => {
            const name = med.name ? med.name.toLowerCase() : '';
            const cat = med.category ? med.category.toLowerCase() : '';
            const desc = med.description ? med.description.toLowerCase() : '';
            const matchesQuery = name.includes(query) || 
                                 cat.includes(query) || 
                                 desc.includes(query);
            const matchesCategory = category === 'all' || med.category === category;
            return matchesQuery && matchesCategory;
        });

        this.medicinesGrid.innerHTML = '';
        if (filtered.length === 0) {
            this.medicinesGrid.innerHTML = `
                <div class="cart-empty-state" style="grid-column: 1 / -1; padding: 4rem 0;">
                    <i data-lucide="search"></i>
                    <h3>No medicines found</h3>
                    <p>Try searching for a different keyword or category</p>
                </div>
            `;
        } else {
            filtered.forEach(med => {
                this.medicinesGrid.appendChild(this.createMedicineCard(med));
            });
        }

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    renderSpecialtyTabs() {
        const specialties = ['all', ...new Set(this.doctors.map(d => d.specialty))];
        this.specialtyFilterTabs.innerHTML = '';
        
        specialties.forEach(spec => {
            const btn = document.createElement('button');
            btn.className = `specialty-tab ${this.selectedSpecialty === spec ? 'active' : ''}`;
            btn.textContent = spec === 'all' ? 'All Specialists' : spec;
            btn.addEventListener('click', () => {
                this.selectedSpecialty = spec;
                this.renderSpecialtyTabs();
                this.renderDoctorsList();
            });
            this.specialtyFilterTabs.appendChild(btn);
        });
    }

    renderDoctorsList() {
        const query = this.doctorSearch.value.toLowerCase().trim();
        const specialty = this.selectedSpecialty;

        const filtered = this.doctors.filter(doc => {
            const name = doc.name ? doc.name.toLowerCase() : '';
            const spec = doc.specialty ? doc.specialty.toLowerCase() : '';
            const matchesQuery = name.includes(query) || 
                                 spec.includes(query);
            const matchesSpecialty = specialty === 'all' || doc.specialty === specialty;
            return matchesQuery && matchesSpecialty;
        });

        this.doctorsGrid.innerHTML = '';
        if (filtered.length === 0) {
            this.doctorsGrid.innerHTML = `
                <div class="cart-empty-state" style="grid-column: 1 / -1; padding: 4rem 0;">
                    <i data-lucide="search"></i>
                    <h3>No doctors found</h3>
                    <p>Try refining your search keyword or specialty selection</p>
                </div>
            `;
        } else {
            filtered.forEach(doc => {
                this.doctorsGrid.appendChild(this.createDoctorCard(doc));
            });
        }

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // CART SYSTEM METHODS
    addToCart(medId) {
        if (this.currentUser && this.currentUser.role === 'admin') {
            this.showToast('Administrators cannot purchase items', 'danger');
            return;
        }

        const med = this.medicines.find(m => m.id === medId);
        if (!med) return;

        const existing = this.cart.find(item => item.id === medId);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.cart.push({
                id: med.id,
                name: med.name,
                price: med.price,
                dosage: med.dosage,
                icon: med.icon,
                quantity: 1
            });
        }

        this.saveCart();
        this.showToast(`${med.name} added to cart`, 'success');
        this.renderCart();
    }

    updateCartQuantity(medId, delta) {
        const item = this.cart.find(i => i.id === medId);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            this.cart = this.cart.filter(i => i.id !== medId);
        }

        this.saveCart();
        this.renderCart();
    }

    removeFromCart(medId) {
        this.cart = this.cart.filter(i => i.id !== medId);
        this.saveCart();
        this.renderCart();
        this.showToast('Item removed from cart', 'info');
    }

    renderCart() {
        this.cartDrawerBody.innerHTML = '';
        
        if (this.cart.length === 0) {
            this.cartDrawerBody.innerHTML = `
                <div class="cart-empty-state">
                    <i data-lucide="shopping-cart"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add medicines from the shop page to start ordering</p>
                </div>
            `;
            this.cartSubtotal.textContent = '₹0.00';
            this.cartTotal.textContent = '₹0.00';
        } else {
            this.cart.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.innerHTML = `
                    <div class="cart-item-image">
                        <i data-lucide="${item.icon || 'pill'}"></i>
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <span class="cart-item-price">₹${item.price.toFixed(2)} <span style="font-size:0.75rem; color:var(--text-muted);">(${item.dosage})</span></span>
                        <div class="cart-item-controls">
                            <div class="cart-quantity-selector">
                                <button class="qty-btn" onclick="app.updateCartQuantity('${item.id}', -1)">-</button>
                                <span class="qty-number">${item.quantity}</span>
                                <button class="qty-btn" onclick="app.updateCartQuantity('${item.id}', 1)">+</button>
                            </div>
                            <button class="remove-item-btn" onclick="app.removeFromCart('${item.id}')">
                                <i data-lucide="trash-2" style="width:14px; height:14px;"></i> Remove
                            </button>
                        </div>
                    </div>
                `;
                this.cartDrawerBody.appendChild(itemEl);
            });

            const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            this.cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
            this.cartTotal.textContent = `₹${subtotal.toFixed(2)}`;
        }

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // MODAL OPENERS
    openMedicineDetailsModal(medId) {
        const med = this.medicines.find(m => m.id === medId);
        if (!med) return;

        this.modalContent.innerHTML = `
            <div class="med-detail-modal-layout">
                <div class="med-detail-header-row">
                    <div class="med-detail-image-box">
                        <i data-lucide="${med.icon || 'pill'}"></i>
                    </div>
                    <div class="med-detail-title-info">
                        <h2>${med.name}</h2>
                        <p>${med.category}</p>
                    </div>
                </div>
                <div class="med-detail-body">
                    <div class="med-detail-meta-grid">
                        <div class="med-detail-meta-item">
                            <span>Dosage / Form</span>
                            <strong>${med.dosage}</strong>
                        </div>
                        <div class="med-detail-meta-item">
                            <span>Price</span>
                            <strong>₹${med.price.toFixed(2)}</strong>
                        </div>
                    </div>
                    <div class="med-detail-block">
                        <h4>Description</h4>
                        <p>${med.description}</p>
                    </div>
                    <div class="med-detail-block">
                        <h4>Composition & Active Ingredients</h4>
                        <p>${med.composition}</p>
                    </div>
                    <div class="med-detail-block">
                        <h4>Usage Guidelines</h4>
                        <p>${med.usage}</p>
                    </div>
                    <div class="med-detail-block">
                        <h4>Possible Side Effects</h4>
                        <p>${med.sideEffects}</p>
                    </div>
                </div>
                <div class="med-detail-footer">
                    <span style="font-size:1.25rem; font-weight:800; color:var(--text-primary);">₹${med.price.toFixed(2)}</span>
                    <button class="btn btn-primary-glass" onclick="app.addFromDetailModal('${med.id}')">
                        <i data-lucide="shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;

        this.modalOverlay.classList.add('active');
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    addFromDetailModal(medId) {
        this.addToCart(medId);
        this.modalOverlay.classList.remove('active');
    }

    openAppointmentBookingModal(docId) {
        if (!this.currentUser) {
            this.showToast('Please sign in to book an appointment', 'info');
            this.openLoginModal();
            return;
        }

        if (this.currentUser.role === 'admin') {
            this.showToast('Administrators cannot book doctor appointments', 'danger');
            return;
        }

        const doc = this.doctors.find(d => d.id === docId);
        if (!doc) return;

        let slotsHtml = '';
        doc.slots.forEach((slot, index) => {
            slotsHtml += `
                <div class="slot-option ${index === 0 ? 'selected' : ''}" data-slot="${slot}" onclick="app.selectBookingSlot(this)">
                    ${slot}
                </div>
            `;
        });

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDateStr = tomorrow.toISOString().split('T')[0];

        this.modalContent.innerHTML = `
            <div class="booking-modal-layout">
                <div class="booking-doctor-info">
                    <div class="booking-doctor-avatar">
                        <i data-lucide="user-round-check"></i>
                    </div>
                    <div>
                        <h2 style="font-size:1.35rem; font-weight:800;">Book an Appointment</h2>
                        <p style="color:var(--primary); font-size:0.85rem; font-weight:700; text-transform:uppercase;">${doc.name} - ${doc.specialty}</p>
                    </div>
                </div>
                <div class="booking-form">
                    <div class="form-group">
                        <label for="bookingPatientName">Patient Full Name</label>
                        <input type="text" id="bookingPatientName" value="${this.currentUser.name}" required>
                    </div>
                    <div class="form-group">
                        <label for="bookingContact">Contact Number</label>
                        <input type="tel" id="bookingContact" placeholder="Enter phone number" required>
                    </div>
                    <div class="form-group">
                        <label for="bookingDate">Appointment Date</label>
                        <input type="date" id="bookingDate" value="${minDateStr}" min="${minDateStr}" required>
                    </div>
                    <div class="form-group">
                        <label>Available Slots</label>
                        <div class="slots-grid" id="slotsGrid">
                            ${slotsHtml}
                        </div>
                    </div>
                    <div style="margin-top:1.5rem; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:1.5rem;">
                        <div>
                            <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Consultation Fee</span>
                            <span style="font-size:1.3rem; font-weight:800;">₹${doc.consultationFee}</span>
                        </div>
                        <button class="btn btn-primary-glass" onclick="app.submitAppointmentBooking('${doc.id}')">
                            Confirm Appointment
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.modalOverlay.classList.add('active');
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    selectBookingSlot(element) {
        const options = document.querySelectorAll('.slot-option');
        options.forEach(opt => opt.classList.remove('selected'));
        element.classList.add('selected');
    }

    submitAppointmentBooking(docId) {
        const doc = this.doctors.find(d => d.id === docId);
        if (!doc) return;

        const patientName = document.getElementById('bookingPatientName').value.trim();
        const contact = document.getElementById('bookingContact').value.trim();
        const date = document.getElementById('bookingDate').value;
        const selectedSlotEl = document.querySelector('.slot-option.selected');
        const slot = selectedSlotEl ? selectedSlotEl.getAttribute('data-slot') : '';

        if (!patientName || !contact || !date || !slot) {
            this.showToast('Please fill out all the fields', 'danger');
            return;
        }

        const booking = {
            id: 'apt_' + Date.now(),
            userEmail: this.currentUser.email,
            doctorName: doc.name,
            specialty: doc.specialty,
            patientName: patientName,
            contact: contact,
            date: date,
            slot: slot,
            fee: doc.consultationFee,
            status: 'Confirmed'
        };

        this.appointments.unshift(booking);
        this.saveAppointments();
        this.modalOverlay.classList.remove('active');
        
        this.logActivity(this.currentUser.email, this.currentUser.name, 'Patient', `Booked appointment for "${patientName}" with ${doc.name} (${doc.specialty}) on ${date} at ${slot}`);
        this.showToast('Appointment booked successfully!', 'success');
        this.navigateToTab('dashboard');
    }

    openCheckoutModal() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        this.modalContent.innerHTML = `
            <div class="checkout-modal-layout">
                <h2 style="font-size:1.5rem; font-weight:800;"><i data-lucide="credit-card"></i> Shipping & Checkout</h2>
                <div class="checkout-summary-box">
                    <h4 style="font-size:1rem; font-weight:700;">Order Summary</h4>
                    <div style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.9rem;">
                        ${this.cart.map(item => `
                            <div style="display:flex; justify-content:space-between;">
                                <span>${item.name} x${item.quantity}</span>
                                <span>₹${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        `).join('')}
                        <div style="border-top:1px solid var(--border-color); padding-top:0.5rem; display:flex; justify-content:space-between; font-weight:750; font-size:1.05rem;">
                            <span>Total Amount</span>
                            <span>₹${subtotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div class="booking-form">
                    <div class="form-group">
                        <label for="shippingAddress">Delivery Address</label>
                        <input type="text" id="shippingAddress" placeholder="e.g. Apartment 45, Sterling Heights, Sector 62, Noida" required>
                    </div>
                    <div class="form-group">
                        <label for="shippingContact">Contact Phone</label>
                        <input type="tel" id="shippingContact" placeholder="e.g. 9876543210" required>
                    </div>
                    <div class="form-group">
                        <label for="paymentMethod">Payment Method</label>
                        <select id="paymentMethod">
                            <option value="cod">Cash on Delivery (COD)</option>
                            <option value="upi">UPI / Net Banking (Simulated)</option>
                            <option value="card">Credit / Debit Card (Simulated)</option>
                        </select>
                    </div>
                    <button class="btn btn-primary-glass btn-block" style="margin-top:1rem;" onclick="app.submitOrderCheckout()">
                        Place Order (₹${subtotal.toFixed(2)})
                    </button>
                </div>
            </div>
        `;

        this.modalOverlay.classList.add('active');
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    submitOrderCheckout() {
        const address = document.getElementById('shippingAddress').value.trim();
        const contact = document.getElementById('shippingContact').value.trim();
        const payment = document.getElementById('paymentMethod').value;
        const totalVal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        if (!address || !contact) {
            this.showToast('Please provide shipping address and contact phone', 'danger');
            return;
        }

        const order = {
            id: 'ord_' + Math.floor(Math.random() * 900000 + 100000),
            userEmail: this.currentUser.email,
            userName: this.currentUser.name,
            itemsCount: this.cart.reduce((sum, item) => sum + item.quantity, 0),
            itemsText: this.cart.map(item => `${item.name} (${item.quantity}x)`).join(', '),
            total: totalVal,
            address: address,
            contact: contact,
            paymentMethod: payment === 'cod' ? 'Cash on Delivery' : payment === 'upi' ? 'UPI Transaction' : 'Card Payment',
            date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }),
            status: 'Processing'
        };

        this.orders.unshift(order);
        this.saveOrders();
        
        // Clear Cart
        this.cart = [];
        this.saveCart();
        this.renderCart();

        this.modalOverlay.classList.remove('active');
        this.logActivity(this.currentUser.email, this.currentUser.name, 'Patient', `Placed sales order #${order.id} for: "${order.itemsText}". Total: ₹${order.total.toFixed(2)}`);
        this.showToast('Order placed successfully!', 'success');
        this.navigateToTab('dashboard');
    }

    // USER DASHBOARD RENDER
    renderDashboard() {
        if (!this.currentUser || this.currentUser.role === 'admin') return;

        const myAppointments = this.appointments.filter(a => a.userEmail === this.currentUser.email);
        const myOrders = this.orders.filter(o => o.userEmail === this.currentUser.email);

        // Render appointments
        this.dashboardAppointmentsList.innerHTML = '';
        if (myAppointments.length === 0) {
            this.dashboardAppointmentsList.innerHTML = `
                <div class="cart-empty-state" style="padding:2rem 0;">
                    <i data-lucide="calendar"></i>
                    <p style="font-size:0.9rem;">No upcoming appointments booked.</p>
                </div>
            `;
        } else {
            myAppointments.forEach(apt => {
                const item = document.createElement('div');
                item.className = 'dashboard-item';
                item.innerHTML = `
                    <div class="item-main-info">
                        <div>
                            <h4>${apt.doctorName}</h4>
                            <p style="font-size:0.8rem; color:var(--primary); font-weight:700; text-transform:uppercase;">${apt.specialty}</p>
                        </div>
                        <span class="status-badge status-confirmed">${apt.status}</span>
                    </div>
                    <div style="font-size:0.85rem; color:var(--text-secondary);">
                        <p style="margin-bottom:0.25rem;">Patient: <strong>${apt.patientName}</strong></p>
                        <p>Contact: <strong>${apt.contact}</strong></p>
                    </div>
                    <div class="item-meta-row">
                        <span><i data-lucide="calendar"></i> ${apt.date}</span>
                        <span><i data-lucide="clock"></i> ${apt.slot}</span>
                        <span><i data-lucide="indian-rupee"></i> Fee: ₹${apt.fee}</span>
                    </div>
                `;
                this.dashboardAppointmentsList.appendChild(item);
            });
        }

        // Render orders
        this.dashboardOrdersList.innerHTML = '';
        if (myOrders.length === 0) {
            this.dashboardOrdersList.innerHTML = `
                <div class="cart-empty-state" style="padding:2rem 0;">
                    <i data-lucide="package"></i>
                    <p style="font-size:0.9rem;">No order history found.</p>
                </div>
            `;
        } else {
            myOrders.forEach(ord => {
                const item = document.createElement('div');
                item.className = 'dashboard-item';
                item.innerHTML = `
                    <div class="item-main-info">
                        <div>
                            <h4>Order ID: #${ord.id}</h4>
                            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Placed on: ${ord.date}</p>
                        </div>
                        <span class="status-badge status-processing">${ord.status}</span>
                    </div>
                    <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">
                        <p style="margin-bottom:0.25rem;">Medicines: <strong>${ord.itemsText}</strong></p>
                        <p style="margin-bottom:0.25rem;">Ship To: <strong>${ord.address}</strong></p>
                        <p>Payment: <strong>${ord.paymentMethod}</strong></p>
                    </div>
                    <div class="item-meta-row">
                        <span><i data-lucide="shopping-bag"></i> ${ord.itemsCount} Items</span>
                        <span><i data-lucide="indian-rupee"></i> Paid Total: <strong>₹${ord.total.toFixed(2)}</strong></span>
                    </div>
                `;
                this.dashboardOrdersList.appendChild(item);
            });
        }

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // ==========================================================
    // ADMINISTRATOR METHODS & PANEL RENDER
    // ==========================================================
    renderAdminPanel() {
        if (!this.currentUser || this.currentUser.role !== 'admin') return;

        // Render statistics dashboard metrics
        const totalRevenue = this.orders.reduce((sum, o) => sum + o.total, 0);
        this.adminStatRevenue.textContent = `₹${totalRevenue.toFixed(2)}`;
        this.adminStatPatients.textContent = this.users.length;
        this.adminStatAppointments.textContent = this.appointments.length;

        // Render medicines inventory list
        this.adminMedicinesList.innerHTML = '';
        if (this.medicines.length === 0) {
            this.adminMedicinesList.innerHTML = `
                <p style="font-size:0.85rem; color:var(--text-muted); padding:1rem; text-align:center;">No medicines in inventory.</p>
            `;
        } else {
            this.medicines.forEach(med => {
                const item = document.createElement('div');
                item.className = 'admin-catalog-item';
                item.innerHTML = `
                    <div class="admin-catalog-item-info">
                        <h4>${med.name}</h4>
                        <span>${med.category} (${med.dosage})</span>
                    </div>
                    <div class="admin-inline-input-wrapper">
                        <span>₹</span>
                        <input type="number" class="admin-inline-input" value="${med.price.toFixed(0)}" onchange="app.handleAdminUpdateMedPrice('${med.id}', this.value)">
                        <button class="btn btn-danger-glass btn-sm" style="padding:4px 8px; height:30px; margin-left:0.5rem; border-radius:4px;" onclick="app.handleAdminDeleteMedicine('${med.id}')">Delete</button>
                    </div>
                `;
                this.adminMedicinesList.appendChild(item);
            });
        }

        // Render doctors registry list
        this.adminDoctorsList.innerHTML = '';
        if (this.doctors.length === 0) {
            this.adminDoctorsList.innerHTML = `
                <p style="font-size:0.85rem; color:var(--text-muted); padding:1rem; text-align:center;">No doctors in registry.</p>
            `;
        } else {
            this.doctors.forEach(doc => {
                const item = document.createElement('div');
                item.className = 'admin-catalog-item';
                item.innerHTML = `
                    <div class="admin-catalog-item-info">
                        <h4>${doc.name}</h4>
                        <span>${doc.specialty} (${doc.experience || 'N/A'}) - Fee: ₹${doc.consultationFee}</span>
                    </div>
                    <div style="display:flex; gap:0.4rem; align-items:center;">
                        <button class="btn btn-secondary-glass btn-sm" style="padding:4px 8px; height:30px; border-radius:4px;" onclick="app.openAdminEditDoctorModal('${doc.id}')">Edit</button>
                        <button class="btn btn-danger-glass btn-sm" style="padding:4px 8px; height:30px; border-radius:4px;" onclick="app.handleAdminDeleteDoctor('${doc.id}')">Delete</button>
                    </div>
                `;
                this.adminDoctorsList.appendChild(item);
            });
        }

        // Render registered patients list
        this.adminPatientsList.innerHTML = '';
        if (this.users.length === 0) {
            this.adminPatientsList.innerHTML = `
                <p style="font-size:0.85rem; color:var(--text-muted); padding:1rem; text-align:center;">No registered patients in database.</p>
            `;
        } else {
            this.users.forEach(u => {
                const item = document.createElement('div');
                item.className = 'admin-catalog-item';
                item.innerHTML = `
                    <div class="admin-catalog-item-info">
                        <h4>${u.name}</h4>
                        <span>${u.email} | ${u.mobile || 'No Mobile'}</span>
                    </div>
                    <button class="btn btn-danger-glass btn-sm" style="padding:4px 8px; height:30px; margin-left:0.5rem; border-radius:4px;" onclick="app.handleAdminDeleteUser('${u.email}')">Delete</button>
                `;
                this.adminPatientsList.appendChild(item);
            });
        }

        // Render global appointments list
        this.adminAppointmentsList.innerHTML = '';
        if (this.appointments.length === 0) {
            this.adminAppointmentsList.innerHTML = `
                <div class="cart-empty-state" style="padding:2rem 0;">
                    <i data-lucide="calendar"></i>
                    <p style="font-size:0.9rem;">No booking reservations in history.</p>
                </div>
            `;
        } else {
            this.appointments.forEach(apt => {
                const item = document.createElement('div');
                item.className = 'dashboard-item';
                item.innerHTML = `
                    <div class="item-main-info">
                        <div>
                            <h4>${apt.doctorName}</h4>
                            <p style="font-size:0.8rem; color:var(--primary); font-weight:700; text-transform:uppercase;">${apt.specialty}</p>
                        </div>
                        <div style="display:flex; gap:0.5rem; align-items:center;">
                            <span class="status-badge status-confirmed">${apt.status}</span>
                            <button class="btn btn-danger-glass btn-sm" style="padding: 2px 6px; border-radius: 4px;" onclick="app.handleAdminDeleteAppointment('${apt.id}')">Cancel</button>
                        </div>
                    </div>
                    <div style="font-size:0.85rem; color:var(--text-secondary);">
                        <p style="margin-bottom:0.25rem;">Patient: <strong>${apt.patientName}</strong> (${apt.userEmail})</p>
                        <p>Phone: <strong>${apt.contact}</strong></p>
                    </div>
                    <div class="item-meta-row">
                        <span><i data-lucide="calendar"></i> ${apt.date}</span>
                        <span><i data-lucide="clock"></i> ${apt.slot}</span>
                        <span><i data-lucide="indian-rupee"></i> Consultation Fee: ₹${apt.fee}</span>
                    </div>
                `;
                this.adminAppointmentsList.appendChild(item);
            });
        }

        // Render global orders log
        this.adminOrdersList.innerHTML = '';
        if (this.orders.length === 0) {
            this.adminOrdersList.innerHTML = `
                <div class="cart-empty-state" style="padding:2rem 0;">
                    <i data-lucide="package"></i>
                    <p style="font-size:0.9rem;">No sales transactions processed.</p>
                </div>
            `;
        } else {
            this.orders.forEach(ord => {
                const item = document.createElement('div');
                item.className = 'dashboard-item';
                item.innerHTML = `
                    <div class="item-main-info">
                        <div>
                            <h4>Order ID: #${ord.id}</h4>
                            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Placed by: ${ord.userName} (${ord.userEmail})</p>
                        </div>
                        <div style="display:flex; gap:0.5rem; align-items:center;">
                            <span class="status-badge status-processing">${ord.status}</span>
                            <button class="btn btn-primary-glass btn-sm" style="padding: 2px 6px; border-radius: 4px;" onclick="app.handleAdminShipOrder('${ord.id}')">Ship</button>
                        </div>
                    </div>
                    <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">
                        <p style="margin-bottom:0.25rem;">Medicines: <strong>${ord.itemsText}</strong></p>
                        <p style="margin-bottom:0.25rem;">Delivery Address: <strong>${ord.address}</strong></p>
                        <p>Contact Phone: <strong>${ord.contact}</strong> | Payment: <strong>${ord.paymentMethod}</strong></p>
                    </div>
                    <div class="item-meta-row">
                        <span><i data-lucide="shopping-bag"></i> ${ord.itemsCount} Items</span>
                        <span><i data-lucide="indian-rupee"></i> Grand Total: <strong>₹${ord.total.toFixed(2)}</strong></span>
                    </div>
                `;
                this.adminOrdersList.appendChild(item);
            });
        }

        this.renderAccessLogs();

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    handleAdminAddMedicine(event) {
        event.preventDefault();
        
        const name = document.getElementById('adminMedName').value.trim();
        const category = document.getElementById('adminMedCategory').value;
        const price = parseFloat(document.getElementById('adminMedPrice').value);
        const dosage = document.getElementById('adminMedDosage').value.trim();
        const desc = document.getElementById('adminMedDesc').value.trim();

        if (!name || !price || !dosage || !desc) {
            this.showToast('Please fill in all medicine parameters', 'danger');
            return;
        }

        const newMed = {
            id: 'm_' + Date.now(),
            name,
            category,
            price,
            dosage,
            icon: 'pill',
            description: desc,
            composition: 'Formulated Compound',
            sideEffects: 'Consult pharmacist for individual recommendations.',
            usage: 'Take as directed on packaging or by a qualified practitioner.'
        };

        this.medicines.unshift(newMed);
        this.saveMedicines();
        
        // Reset Form
        document.getElementById('adminAddMedicineForm').reset();
        this.logActivity('admin_hrik', 'Hrik', 'Admin', `Added new medicine to catalog: "${name}" (${dosage}) - Price: ₹${price}`);
        this.showToast(`${name} added to pharmacy catalog!`, 'success');
    }

    handleAdminAddDoctor(event) {
        event.preventDefault();

        const name = document.getElementById('adminDocName').value.trim();
        const specialty = document.getElementById('adminDocSpecialty').value;
        const experience = document.getElementById('adminDocExp').value.trim();
        const fee = parseInt(document.getElementById('adminDocFee').value);

        if (!name || !experience || !fee) {
            this.showToast('Please fill in all doctor details', 'danger');
            return;
        }

        const newDoc = {
            id: 'd_' + Date.now(),
            name,
            specialty,
            rating: '5.0',
            experience,
            consultationFee: fee,
            nextAvailable: 'Today',
            slots: ['10:00 AM', '02:00 PM', '04:00 PM'],
            bio: `${name} is a newly registered consultant specializing in ${specialty}.`
        };

        this.doctors.unshift(newDoc);
        this.saveDoctors();

        // Reset Form
        document.getElementById('adminAddDoctorForm').reset();
        this.logActivity('admin_hrik', 'Hrik', 'Admin', `Registered new consultant in registry: "${name}" (${specialty}) - Fee: ₹${fee}`);
        this.showToast(`${name} registered in system!`, 'success');
    }

    handleAdminDeleteAppointment(aptId) {
        const apt = this.appointments.find(a => a.id !== aptId);
        this.appointments = this.appointments.filter(a => a.id !== aptId);
        this.saveAppointments();
        if (apt) {
            this.logActivity('admin_hrik', 'Hrik', 'Admin', `Cancelled patient reservation ID: #${aptId} (Patient: "${apt.patientName}" with ${apt.doctorName})`);
        }
        this.showToast('Appointment registration cancelled', 'info');
    }

    handleAdminShipOrder(ordId) {
        const order = this.orders.find(o => o.id === ordId);
        if (order) {
            order.status = 'Shipped / Out for Delivery';
            this.saveOrders();
            this.logActivity('admin_hrik', 'Hrik', 'Admin', `Dispatched sales order ID: #${ordId} to customer`);
            this.showToast(`Order #${ordId} status updated to Shipped`, 'success');
        }
    }

    handleAdminUpdateMedPrice(medId, value) {
        const price = parseFloat(value);
        if (isNaN(price) || price <= 0) {
            this.showToast('Please enter a valid price', 'danger');
            return;
        }
        const med = this.medicines.find(m => m.id === medId);
        if (med) {
            med.price = price;
            this.saveMedicines();
            this.logActivity('admin_hrik', 'Hrik', 'Admin', `Modified medicine price: "${med.name}" to ₹${price.toFixed(2)}`);
            this.renderAdminPanel();
            this.showToast(`Updated ${med.name} price to ₹${price.toFixed(2)}`, 'success');
        }
    }

    handleAdminUpdateDocFee(docId, value) {
        const fee = parseInt(value);
        if (isNaN(fee) || fee <= 0) {
            this.showToast('Please enter a valid consultation fee', 'danger');
            return;
        }
        const doc = this.doctors.find(d => d.id === docId);
        if (doc) {
            doc.consultationFee = fee;
            this.saveDoctors();
            this.logActivity('admin_hrik', 'Hrik', 'Admin', `Modified consultation fee: "${doc.name}" to ₹${fee}`);
            this.renderAdminPanel();
            this.showToast(`Updated ${doc.name} consultation fee to ₹${fee}`, 'success');
        }
    }

    handleAdminDeleteMedicine(medId) {
        const med = this.medicines.find(m => m.id === medId);
        this.medicines = this.medicines.filter(m => m.id !== medId);
        this.saveMedicines();
        this.renderAdminPanel();
        if (med) {
            this.logActivity('admin_hrik', 'Hrik', 'Admin', `Removed medicine from inventory: "${med.name}"`);
            this.showToast(`Removed ${med.name} from pharmacy inventory`, 'info');
        }
    }

    handleAdminDeleteDoctor(docId) {
        const doc = this.doctors.find(d => d.id === docId);
        this.doctors = this.doctors.filter(d => d.id !== docId);
        this.saveDoctors();
        this.renderAdminPanel();
        if (doc) {
            this.logActivity('admin_hrik', 'Hrik', 'Admin', `Removed consultant from registry: "${doc.name}"`);
            this.showToast(`Removed ${doc.name} from clinical registry`, 'info');
        }
    }

    simulateIncomingActivity() {
        const opType = Math.random() > 0.5 ? 1 : 0;
        const patientNames = ['Amit Sharma', 'Priya Iyer', 'Rahul Verma', 'Sneha Kapoor', 'Vikram Sen', 'Ananya Roy'];
        const emails = ['amit.sharma@yahoo.com', 'priya.iyer@gmail.com', 'rahul.verma@outlook.com', 'sneha.k@hotmail.com', 'vikram.sen@gmail.com', 'ananya.roy@live.in'];
        const mobiles = ['9876501234', '9123456780', '9888776655', '9555443322', '9000111222', '9666777888'];
        
        const randIdx = Math.floor(Math.random() * patientNames.length);
        const patName = patientNames[randIdx];
        const email = emails[randIdx];
        const mob = mobiles[randIdx];

        if (!this.users.some(u => u.email === email)) {
            this.users.push({ name: patName, email: email, mobile: mob, password: 'password' });
            localStorage.setItem('novarx_users', JSON.stringify(this.users));
            this.logActivity(email, patName, 'Patient', 'Registered new user account (Simulated System Event)');
        }

        if (opType === 0) {
            const doc = this.doctors[Math.floor(Math.random() * this.doctors.length)];
            const slot = doc.slots[Math.floor(Math.random() * doc.slots.length)];
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + Math.floor(Math.random() * 5 + 1));
            const dateStr = tomorrow.toISOString().split('T')[0];

            const booking = {
                id: 'apt_' + Date.now(),
                userEmail: email,
                doctorName: doc.name,
                specialty: doc.specialty,
                patientName: patName,
                contact: mob,
                date: dateStr,
                slot: slot,
                fee: doc.consultationFee,
                status: 'Confirmed'
            };
            this.appointments.unshift(booking);
            this.saveAppointments();
            this.logActivity(email, patName, 'Patient', `Booked appointment with ${doc.name} (${doc.specialty}) on ${dateStr} at ${slot} (Simulated System Event)`);
            this.showToast(`Activity Simulated: ${patName} booked ${doc.name}`, 'success');
        } else {
            const med = this.medicines[Math.floor(Math.random() * this.medicines.length)];
            const qty = Math.floor(Math.random() * 2 + 1);
            const totalVal = med.price * qty;

            const order = {
                id: 'ord_' + Math.floor(Math.random() * 900000 + 100000),
                userEmail: email,
                userName: patName,
                itemsCount: qty,
                itemsText: `${med.name} (${qty}x)`,
                total: totalVal,
                address: 'Sector ' + Math.floor(Math.random() * 150 + 10) + ', Noida, UP',
                contact: mob,
                paymentMethod: 'UPI Transaction',
                date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }),
                status: 'Processing'
            };
            this.orders.unshift(order);
            this.saveOrders();
            this.logActivity(email, patName, 'Patient', `Placed sales order #${order.id} for: "${order.itemsText}". Total: ₹${order.total.toFixed(2)} (Simulated System Event)`);
            this.showToast(`Activity Simulated: ${patName} ordered ${med.name}`, 'success');
        }
    }

    autoProcessAllOrders() {
        const processingOrders = this.orders.filter(o => o.status === 'Processing');
        if (processingOrders.length === 0) {
            this.showToast('No processing sales orders to dispatch', 'info');
            return;
        }
        processingOrders.forEach(o => {
            o.status = 'Shipped / Out for Delivery';
        });
        this.saveOrders();
        this.logActivity('admin_hrik', 'Hrik', 'Admin', `Dispatched all pending orders in database (Count: ${processingOrders.length})`);
        this.showToast(`Dispatched all ${processingOrders.length} processing orders!`, 'success');
    }

    handleAdminDeleteUser(email) {
        const user = this.users.find(u => u.email === email);
        if (user) {
            if (this.currentUser && this.currentUser.email === email) {
                this.currentUser = null;
                localStorage.removeItem('novarx_session');
                this.updateAuthUI();
            }
            this.users = this.users.filter(u => u.email !== email);
            localStorage.setItem('novarx_users', JSON.stringify(this.users));
            this.logActivity('admin_hrik', 'Hrik', 'Admin', `Deleted patient account: "${user.name}" (${user.email})`);
            this.renderAdminPanel();
            this.showToast(`Removed patient ${user.name} from database`, 'info');
        }
    }

    openAdminEditDoctorModal(docId) {
        const doc = this.doctors.find(d => d.id === docId);
        if (!doc) return;

        this.modalContent.innerHTML = `
            <div class="booking-modal-layout">
                <div class="booking-doctor-info">
                    <div class="booking-doctor-avatar"><i data-lucide="edit-3"></i></div>
                    <div>
                        <h2 style="font-size:1.35rem; font-weight:800;">Edit Doctor Profile</h2>
                        <p style="color:var(--primary); font-size:0.85rem; font-weight:700; text-transform:uppercase;">ID: ${doc.id}</p>
                    </div>
                </div>
                <form id="adminEditDoctorForm" class="booking-form" onsubmit="app.handleAdminSaveDoctorEdit(event, '${doc.id}')">
                    <div class="form-group">
                        <label for="editDocName">Doctor Full Name</label>
                        <input type="text" id="editDocName" value="${doc.name}" required>
                    </div>
                    <div class="form-group">
                        <label for="editDocSpecialty">Specialty Department</label>
                        <select id="editDocSpecialty">
                            <option value="Cardiology" ${doc.specialty === 'Cardiology' ? 'selected' : ''}>Cardiology</option>
                            <option value="Pediatrics" ${doc.specialty === 'Pediatrics' ? 'selected' : ''}>Pediatrics</option>
                            <option value="Neurology" ${doc.specialty === 'Neurology' ? 'selected' : ''}>Neurology</option>
                            <option value="Orthopedics" ${doc.specialty === 'Orthopedics' ? 'selected' : ''}>Orthopedics</option>
                            <option value="Dermatology" ${doc.specialty === 'Dermatology' ? 'selected' : ''}>Dermatology</option>
                            <option value="General Physician" ${doc.specialty === 'General Physician' ? 'selected' : ''}>General Physician</option>
                            <option value="MD Internal Medicine" ${doc.specialty === 'MD Internal Medicine' ? 'selected' : ''}>MD Internal Medicine</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="editDocExp">Years of Experience</label>
                        <input type="text" id="editDocExp" value="${doc.experience}" required>
                    </div>
                    <div class="form-group">
                        <label for="editDocFee">Consultation Fee (₹)</label>
                        <input type="number" min="10" id="editDocFee" value="${doc.consultationFee}" required>
                    </div>
                    <div class="form-group">
                        <label for="editDocBio">Professional Bio</label>
                        <textarea id="editDocBio" rows="3" style="padding: 0.85rem 1rem; background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-color); border-radius: var(--radius-md); color: var(--text-primary); font-family: var(--font-sans); font-size: 0.95rem; outline: none; transition: var(--transition-fast);" required>${doc.bio || ''}</textarea>
                    </div>
                    <button type="submit" class="btn btn-primary-glass btn-block" style="margin-top: 1rem;">Save Changes</button>
                </form>
            </div>
        `;

        this.modalOverlay.classList.add('active');
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    handleAdminSaveDoctorEdit(event, docId) {
        event.preventDefault();
        const doc = this.doctors.find(d => d.id === docId);
        if (!doc) return;

        const name = document.getElementById('editDocName').value.trim();
        const specialty = document.getElementById('editDocSpecialty').value;
        const experience = document.getElementById('editDocExp').value.trim();
        const fee = parseInt(document.getElementById('editDocFee').value);
        const bio = document.getElementById('editDocBio').value.trim();

        if (!name || !experience || !fee || !bio) {
            this.showToast('Please fill out all details', 'danger');
            return;
        }

        doc.name = name;
        doc.specialty = specialty;
        doc.experience = experience;
        doc.consultationFee = fee;
        doc.bio = bio;

        this.saveDoctors();
        this.renderAdminPanel();
        this.modalOverlay.classList.remove('active');
        this.logActivity('admin_hrik', 'Hrik', 'Admin', `Updated consultant profile details: "${name}" (${specialty})`);
        this.showToast(`Updated doctor profile: ${name}`, 'success');
    }
    

    matchSymptom(type) {
        const resultCard = document.getElementById('symptomMatchResult');
        const tags = document.querySelectorAll('.symptom-tag');
        
        tags.forEach(tag => {
            if (tag.textContent.toLowerCase().includes(type) || 
                (type === 'fever' && tag.textContent.toLowerCase().includes('cold')) ||
                (type === 'headache' && tag.textContent.toLowerCase().includes('migraine')) ||
                (type === 'skin' && tag.textContent.toLowerCase().includes('acne')) ||
                (type === 'joints' && tag.textContent.toLowerCase().includes('joints') || tag.textContent.toLowerCase().includes('pain'))) {
                tag.classList.add('active');
            } else {
                tag.classList.remove('active');
            }
        });

        if (!resultCard) return;

        let matchData = {};
        if (type === 'fever') {
            const doc = this.doctors.find(d => d.name.includes('Rajesh Mehta')) || this.doctors[0];
            matchData = {
                specialty: "General Medicine / Physician",
                recommendation: `We recommend consulting with <strong>${doc.name}</strong> (${doc.specialty}), expert in fever, viral infections, and family healthcare.`,
                docId: doc.id
            };
        } else if (type === 'headache') {
            const doc = this.doctors.find(d => d.specialty.includes('Neurology')) || this.doctors[0];
            matchData = {
                specialty: "Neurology Specialist",
                recommendation: `For persistent migraines or headaches, we recommend <strong>${doc.name}</strong>, a leading specialist with ${doc.experience} of experience.`,
                docId: doc.id
            };
        } else if (type === 'skin') {
            const doc = this.doctors.find(d => d.specialty.includes('Dermatology')) || this.doctors[0];
            matchData = {
                specialty: "Dermatology Clinic",
                recommendation: `For acne, rashes, or skin conditions, consult <strong>${doc.name}</strong>, offering consultation at ₹${doc.consultationFee}.`,
                docId: doc.id
            };
        } else if (type === 'joints') {
            const doc = this.doctors.find(d => d.specialty.includes('Orthopedics')) || this.doctors[0];
            matchData = {
                specialty: "Orthopedics & Joint Care",
                recommendation: `For chronic joint pains or bone aches, we recommend booking a consult with <strong>${doc.name}</strong>.`,
                docId: doc.id
            };
        }

        resultCard.innerHTML = `
            <h4>Matched: ${matchData.specialty}</h4>
            <p>${matchData.recommendation}</p>
            <button class="btn btn-primary-glass btn-sm" onclick="app.openAppointmentBookingModal('${matchData.docId}')" style="width:100%; height:34px; margin-top:0.25rem;">
                <i data-lucide="calendar"></i> Book Consult Now (₹${this.doctors.find(d => d.id === matchData.docId).consultationFee})
            </button>
        `;
        resultCard.classList.add('active');

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    handleUniversalSearch(event) {
        if (event.key === 'Enter') {
            this.triggerUniversalSearch();
        }
    }

    triggerUniversalSearch() {
        const input = document.getElementById('universalSearchInput');
        if (!input) return;

        const query = input.value.toLowerCase().trim();
        if (!query) {
            this.showToast('Please type a search query first', 'info');
            return;
        }

        // Check if query matches specialty or doctor name
        const docMatch = this.doctors.some(d => 
            d.name.toLowerCase().includes(query) || 
            d.specialty.toLowerCase().includes(query)
        );

        if (docMatch) {
            // Setup target searches
            this.selectedSpecialty = 'all';
            this.doctorSearch.value = query;
            this.navigateToTab('doctors');
            this.renderSpecialtyTabs();
            this.renderDoctorsList();
            this.showToast(`Found matching specialists for: "${query}"`, 'success');
        } else {
            // Fallback to medicines catalog search
            this.selectedCategory = 'all';
            this.medicineSearch.value = query;
            this.navigateToTab('pharmacy');
            this.renderCategoryTabs();
            this.renderPharmacyList();
            this.showToast(`Showing pharmacy inventory matches for: "${query}"`, 'success');
        }
        
        // Reset input on success
        input.value = '';
    }

    quickSearch(query) {
        const input = document.getElementById('universalSearchInput');
        if (input) {
            input.value = query;
            this.triggerUniversalSearch();
        }
    }

    logActivity(userId, username, role, action, ip = '127.0.0.1') {
        const timestamp = new Date().toLocaleString();
        const log = { userId, username, role, action, ip, timestamp };
        this.accessLogs.push(log);
        localStorage.setItem('novarx_access_logs', JSON.stringify(this.accessLogs));
        if (this.currentUser && this.currentUser.role && this.currentUser.role.toLowerCase() === 'admin') {
            this.renderAccessLogs();
        }
    }

    renderAccessLogs() {
        if (!this.adminAccessLogsList) return;
        this.adminAccessLogsList.innerHTML = '';
        if (this.accessLogs.length === 0) {
            this.adminAccessLogsList.innerHTML = `
                <p style="font-size:0.85rem; color:var(--text-muted); padding:1rem; text-align:center;">No log data entries recorded in database.</p>
            `;
        } else {
            const sortedLogs = [...this.accessLogs].reverse();
            sortedLogs.forEach(log => {
                const item = document.createElement('div');
                item.className = 'admin-catalog-item';
                item.style.flexDirection = 'column';
                item.style.alignItems = 'flex-start';
                item.style.gap = '0.4rem';
                
                let actionColor = 'var(--primary)';
                if (log.action.includes('fail') || log.action.includes('delete') || log.action.includes('Cancel') || log.action.includes('cleared')) {
                    actionColor = 'var(--danger)';
                } else if (log.action.includes('Registered') || log.action.includes('authenticated') || log.action.includes('Purchased')) {
                    actionColor = 'var(--accent)';
                }
                
                item.innerHTML = `
                    <div style="display:flex; justify-content:space-between; width:100%; font-size:0.8rem; color:var(--text-muted);">
                        <span><i data-lucide="clock" style="width:12px; height:12px; display:inline-block; vertical-align:middle; margin-right:4px;"></i>${log.timestamp}</span>
                        <span>IP: ${log.ip}</span>
                    </div>
                    <div style="font-size:0.85rem; color:var(--text-primary);">
                        <strong>${log.username}</strong> (<span style="color:var(--primary); font-size:0.75rem;">${log.role}</span>): 
                        <span style="color:${actionColor};">${log.action}</span>
                    </div>
                `;
                this.adminAccessLogsList.appendChild(item);
            });
        }
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    clearAccessLogs() {
        this.accessLogs = [];
        localStorage.removeItem('novarx_access_logs');
        this.showToast('Security logs database cleared successfully', 'success');
        this.renderAccessLogs();
    }
}

// Instantiate App on window load
window.addEventListener('DOMContentLoaded', () => {
    window.app = new NovaRxApp();
});
